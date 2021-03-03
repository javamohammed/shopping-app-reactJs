import { LOGIN, AUTH_LOGOUT, AUTH_SUCCESS, AUTH_SIGN_IN } from "../actions/actionTypes";

const initialState  = {
    token:"",
    expirationDate: "",
    user: null,
    error:""
}
const rootReducer = (state = initialState , action) => {

    switch (action.type) {
        case LOGIN:
            if(action.error){
                state = {...state, error: action.error}
            }else{
                //console.log(JSON.parse(localStorage.getItem("user")))
                state = {token: action.token, expirationDate: action.expirationDate, error:"", user: {...action.user}}
            }
        case AUTH_SUCCESS:
            return {token: action.token, expirationDate: action.expirationDate, error:"", user: {...action.user}}
        case AUTH_SIGN_IN:
            return {...state, error: action.error}
        case AUTH_LOGOUT:
            return initialState
        default:
            return state;
    }

}


export default rootReducer;