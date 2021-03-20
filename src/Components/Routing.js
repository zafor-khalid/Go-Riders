import React from 'react';
import { Redirect, Route,Switch} from 'react-router-dom';
import Registration from './Body/Auth/Registration';
import Login from './Body/Auth/Login'
import Menu from './Body/Menus/Menu';

import {connect} from 'react-redux'
import Logout from './Body/Auth/Logout';
import Search from './Body/Search/Search';

const mapStateToProps = (state) => {
  return {
    idToken: state.idToken
  }
}


const Routing = props=>{
    let route=null;
    if(props.idToken){

        route=
        <Switch>
            <Route path="/" exact component={Menu}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/bike" component={Search}/>
            <Route path="/car" component={Search}/>
            <Route path="/bus" component={Search}/>
            <Route path="/train" component={Search}/>
            <Redirect to="/" />
        </Switch>
    }
    else{
        route=
        <Switch>
        <Route path="/" exact component={Menu}/>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration}/>
        <Redirect to="/login" />
        </Switch>
    }
    return(
          <div>
          {route}
          </div>
    )
}
export default connect(mapStateToProps)(Routing);