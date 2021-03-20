
import {Formik} from 'formik';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {addUser} from '../../../Redux/actionCreators';
import {connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (fullname,email,password) => {
            dispatch(addUser(fullname,email,password))
        }
    }
}
class Registration extends Component{
    render(){
        return(
            <div className="container">
                <Formik
                    initialValues={
                        {
                            name:'',
                            email:'',
                            password:'',
                            confirmpassword:''
                        }
                    }
                    onSubmit={values=>{
                        console.log(values)
                        this.props.addUser(values.name,values.email,values.password)
                    }}

                    validate={values=>{
                        let error={};
                        if(!values.name){
                            error.name="Required"
                        }
                        if(!values.email){
                            error.email="Required"
                        }
                        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                            error.email="Invalid Email address"
                        }
                        if(!values.password){
                            error.password="Required"
                        }
                        if(values.password!==values.confirmpassword){
                            error.confirmpassword="Password not match!"
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
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className="form-control p-3 mb-3"
                        placeholder="Enter your name"
                    />
                    <span className="text-danger">{errors.name}</span>
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
                    <input
                        type="password"
                        name="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        className="form-control p-3 mb-3"
                        placeholder="Confirm password"
                    />
                    
                    <span className="text-danger">{errors.confirmpassword}</span>
                    <button type="submit" disabled={isSubmitting} className="btn btn-success">
                        Registration
                    </button>
                </form>
                )}

                </Formik>
                <div>Already have an account?<Link exact to="/login">Login</Link> here.</div>
            </div>
        )
    }
}
export default connect(null,mapDispatchToProps)(Registration);