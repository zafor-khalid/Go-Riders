import * as Actions from './actionTypes'
const initialState={
    email:'',
    idToken:null,
    localId:null,
}

export const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case Actions.AUTH_SUCCESS:
            return{
                ...state,
                idToken:action.payload.idToken,
                localId:action.payload.localId,
                email:action.payload.email,
            }
        default:
            return state
    }
}