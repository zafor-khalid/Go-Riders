import axios from 'axios'
import * as Actions from './actionTypes'


export const authSuccess=(email,idToken,localId)=>{
    return{
        type:Actions.AUTH_SUCCESS,
        payload:{
            email:email,
            idToken:idToken,
            localId:localId
        }
    }
}

export const addUserInfo=(fullname,email,idToken,localId)=>{
    const info={
        fullname:fullname,
        email:email,
        idToken:idToken,
        localId:localId
    }
    axios.post("https://urban-riders-97b8a-default-rtdb.firebaseio.com/User.json",info)
    .then(response=>{

    })
    
}

export const addUser=(fullname,email,password)=>dispatch=>{
    const info={
        email:email,
        password:password,
        returnSecureToken:true
    }
    const API_KEY="AIzaSyDL_tY2nnmXVHGUtCfvlGs1Nvbjbl3iYuE";
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+API_KEY,info)
    .then(response=>{
        localStorage.setItem('token',response.data.idToken);
        localStorage.setItem('userId',response.data.localId);
        const exper=new Date(new Date().getTime() + response.data.expiresIn*1000)
        localStorage.setItem('experDate',exper);
        dispatch(addUserInfo(fullname,email,response.data.idToken,response.data.localId))
        dispatch(authSuccess(email,response.data.idToken,response.data.localId))
    })
}

export const logIn=(email,password)=>dispatch=>{
    const info={
        email:email,
        password:password,
        returnSecureToken:true
    }
    const API_KEY="AIzaSyDL_tY2nnmXVHGUtCfvlGs1Nvbjbl3iYuE";
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+API_KEY,info)
    .then(response=>{
        localStorage.setItem('token',response.data.idToken);
        localStorage.setItem('userId',response.data.localId);
        const exper=new Date(new Date().getTime() + response.data.expiresIn*1000)
        localStorage.setItem('experDate',exper);
        dispatch(authSuccess(email,response.data.idToken,response.data.localId))
    })
}


export const authCheck=()=>dispatch=>{
    let token=localStorage.getItem('token')
    if(!token){
        //logout
    }
    else{
        let exper=localStorage.getItem('experDate')
        if(exper>=new Date()){
            //logout
        }
        else{
            let userId=localStorage.getItem('userId')
            dispatch(authSuccess(token,userId))
        }
    }
}

export const authLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('experDate')
    return{
        type:Actions.AUTH_LOGOUT
    }
}
