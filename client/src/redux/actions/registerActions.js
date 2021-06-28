import {
  REGISTER_ERROR,
  REGISTER_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_ERROR_CLEAR
} from './types'

import axios from 'axios'
import { apiBaseURL } from './../../utils/constant'


export const registerRequest = (user, history) => (dispatch) => {
  // user register request start
  dispatch({ type: REGISTER_REQUEST })

  // clear all register errors if any
  dispatch(registerErrorClear())

  // AJAX call to register user
  axios.post(
    `${apiBaseURL}/api/user/register`,
    user
  ).then((res)=>{
    // user register response received
    dispatch(registerResponse())


    // redirect user to login page
    history.push("/login")

  }).catch((err)=>{

    // set error related to register
    dispatch(registerError(err.response.data.error))

    // user register response received
    dispatch(registerResponse())
    
  })

  
}

// Action creator for register errors
export const registerError = (payload) => {
  return {
    type: REGISTER_ERROR,
    payload: payload
  }
}

// Action creator for register process loading
export const registerResponse = () => {
  return {
    type: REGISTER_RESPONSE
  }
}

// Action creator for register errors clear
export const registerErrorClear = () => {
  return {
    type: REGISTER_ERROR_CLEAR
  }
}


