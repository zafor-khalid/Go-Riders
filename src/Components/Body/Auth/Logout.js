import React, { Component } from 'react';
import {connect } from 'react-redux'
import {Redirect} from 'react-router';
import {authLogout} from '../../../Redux/actionCreators';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authLogout: () => {
            dispatch(authLogout(authLogout()))
        }
    }
}

class Logout extends Component{
    componentDidMount(){
        this.props.authLogout()
    }
    render(){
        return(
            <Redirect to="/" />
        )
    }
}
export default connect(null, mapDispatchToProps)(Logout);