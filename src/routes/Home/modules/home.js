import axios from 'axios';
import { browserHistory } from 'react-router';
/// / ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'


// LOGIN
const _loginHelper = (email, password) => {
    console.log('emailpass ', email, password);
    const request = axios.post('/auth/login', {
        email,
        password,
    });
    return {
        type: LOGIN,
        payload: request,
    }
}
export const login = (email, password) => (dispatch) => {
    dispatch(_loginHelper(email, password)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {
                dispatch({type: 'ADD_TOKEN', token: response.payload.data.token});
                setTimeout(() => {
                    browserHistory.push('/instructor');
                }, 1000)
            }
        }
    );
}


// SIGN UP
const _signUpHelper = (email, password) => {
    console.log('emailpass ', email, password);
    const request = axios.post('/auth/create', {
        email,
        password,
    });
    return {
        type: SIGNUP,
        payload: request,
    }
}

export const signUp = (email, password) => (dispatch) => {
    dispatch(_signUpHelper(email, password)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {
                dispatch({type: 'ADD_TOKEN', token: response.payload.data.token});
                setTimeout(() => {
                    browserHistory.push('/instructor');
                }, 1000)
            }
        }
    );
}

export const actions = {
    login,
    signUp
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LOGIN] : (state, action) => {

    },
    [SIGNUP] : (state, action) => {

    },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function counterReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
