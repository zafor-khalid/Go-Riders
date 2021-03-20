
import {Formik} from 'formik';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux'
import {logIn} from '../../../Redux/actionCreators';

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email,password) => {
            dispatch(logIn(email,password))
        }
        ,
        
    }
}

class Login extends Component{
    render(){
        return(
            <div className="container">
                <Formik
                    initialValues={
                        {
                            email:'',
                            password:'',
                        }
                    }
                    onSubmit={values=>{
                        console.log(values)
                        this.props.logIn(values.email,values.password)
                    }}

                    validate={values=>{
                        let error={};
                        if(!values.email){
                            error.email="Required"
                        }
                        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                            error.email="Invalid Email address"
                        }
                        if(!values.password){
                            error.password="Required"
                        }
                        return error;
                        
                    }}
                >
                {({values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isSubmitting})=>(
                    <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="form-control p-3 mb-3"
                        placeholder="Enter your email"
                    />
                    
                    <span className="text-danger">{errors.email}</span>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        className="form-control p-3 mb-3"
                        placeholder="Enter password"
                    />
                    
                    <span className="text-danger">{errors.password}</span>
                    
                    <button type="submit" disabled={isSubmitting} className="btn btn-warning">
                        Login
                    </button>
                </form>
                )}

                </Formik>
                <div>Don't have an account?<Link exact to="/registration">Resigration</Link> here.</div>
            </div>
        )
    }
}
export default connect(null,mapDispatchToProps)(Login);