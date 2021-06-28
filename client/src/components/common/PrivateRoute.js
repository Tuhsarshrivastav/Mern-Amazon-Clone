import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

function PrivateRoute(props) {
  if (props.login.isAuthenticated){
    return (
      props.children
    )

  } else {
    return (
      <Redirect to="/login" />
    )
  }
  
}

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

