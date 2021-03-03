import { LOGIN, AUTH_LOGOUT, AUTH_SUCCESS, AUTH_SIGN_IN } from "./actionTypes";
import jwt_decode from "jwt-decode";
import User from "../../models/User";
const API_URL = `http://localhost:3000`



export const signUp = (email, fullname, password, user_type) => {
    return async dispatch => {
        const signIn_url = `${API_URL}/signup`
        
        const response = await fetch(signIn_url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fullname: fullname,
                user_type:user_type,
                password_confirm:password,
            })
        })
        const resData = await response.json();
        if (response.status === 200) {
            const user =new User({
                id: resData.id,
                fullname: resData.fullname,
                enabled: resData.enabled,
                email: resData.email,
                role: resData.role
            })
            let decodedToken = jwt_decode(resData.accessToken);
            localStorage.setItem("token", resData.accessToken);
            localStorage.setItem("expirationDate", decodedToken.exp);
            console.log("user :::", user)
            localStorage.setItem("user",  JSON.stringify(user));
            
            return  dispatch({token: resData.accessToken, expirationDate: decodedToken.exp, user: user, type: LOGIN})
        } else {
            console.log(resData)
            return  dispatch({error: resData.error, type: AUTH_SIGN_IN})
        }
    }
}



export const login = (email, password) => {
    const authenticate_url = `${API_URL}/login`
return  async dispatch => {
    const response = await fetch(authenticate_url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    console.log("response :::", response)
    const resData = await response.json();
    if(response.status === 200){
        const user =new User({
            id: resData.id,
            fullname: resData.fullname,
            enabled: resData.enabled,
            email: resData.email,
            role: resData.role
        })
        let decodedToken = jwt_decode(resData.accessToken);
        ///-----console
        /*
        console.log("token", resData.token)
        console.log("expirationDate", decodedToken)
        */
        //##########
        localStorage.setItem("token", resData.accessToken);
        localStorage.setItem("expirationDate", decodedToken.exp);
        localStorage.setItem("user",  JSON.stringify(user));
        return  dispatch({token: resData.accessToken, expirationDate: decodedToken.exp, user: user, type: LOGIN})
    }else{
        console.log("Message : ",resData.message )
        return  dispatch({error: resData.message, type: LOGIN})
    }
}
}

export const authCheckState = () => {
    return  dispatch => {
        const token = localStorage.getItem('token')
        const expirationDate = localStorage.getItem('expirationDate') * 1000
        if(!token){
            dispatch(logout())
        }else{
            if(Date.now() >= expirationDate ){
                dispatch(logout())
            }else{
                const user = JSON.parse( localStorage.getItem('user'))
                dispatch(authSuccess(token, user, localStorage.getItem('expirationDate')))
                dispatch(checkAuthTimeOut((expirationDate - Date.now())) )
            }

        }
    }
}

export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
      setTimeout(() => {
        dispatch(logout());
      }, expirationTime);
    };
  };

export const authSuccess = (token, user, expirationDate) => {
    return {
      type: AUTH_SUCCESS,
      token: token,
      user: user, 
      expirationDate: expirationDate
    };
  };

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("user");
    return {
      type: AUTH_LOGOUT
    };
  };