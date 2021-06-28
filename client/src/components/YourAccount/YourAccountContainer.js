import React, { Component } from 'react'
import YourAccountView from './YourAccountView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class YourAccountContainer extends Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount(){
    document.title = "Amazon Clone - Your Account"
  }


  render() {
    return (
     <YourAccountView 
      {...this.props}
     />
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(YourAccountContainer))