import React, { Component } from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import Routing from './Routing';
import {connect} from 'react-redux'
import {authCheck} from '../Redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        localId: state.localId
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authCheck: () => {
            dispatch(authCheck())
        }
    }
}

class Main extends Component{

    componentDidMount(){
        this.props.authCheck()
    }
   
    render(){
       
        return(
            <div>
                <Header/>
                <Body/>
                <Routing/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);