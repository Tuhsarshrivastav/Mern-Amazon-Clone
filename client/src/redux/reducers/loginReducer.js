import {
  LOGIN_ERROR,
  LOGIN_RESPONSE,
  LOGIN_REQUEST,
  LOGIN_ERROR_CLEAR,
  SET_LOGIN_USER,
  LOGOUT_USER,
  CHANGE_PASSWORD,
  UPDATE_PROFILE_PIC
} from './../actions/types'

const initialState = {
  isLoading: false,
  error: {

  },
  isAuthenticated: false,
  user: {

  }
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case LOGIN_ERROR_CLEAR:
      return {
        ...state,
        error: {}
      }
    case SET_LOGIN_USER:
      return {
        ...state,
        error: {},
        isAuthenticated: true,
        user: action.payload
      }
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        user: action.payload
      }
    case UPDATE_PROFILE_PIC:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}