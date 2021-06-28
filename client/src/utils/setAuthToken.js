import axios from 'axios'

function setAuthToken(token){
  if (token){
    // set token to HTTP header
    axios.defaults.headers.common["x-access-token"] = token
  } else {
    // delete token from HTTP header
    delete axios.defaults.headers.common["x-access-token"]
  }
}

export default setAuthToken