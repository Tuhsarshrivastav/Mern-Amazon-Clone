import React, { Component } from 'react'
import PasswordChangeView from './PasswordChangeView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changePassword, updateUserProfilePic } from './../../redux/actions/loginActions'

class PasswordChangeContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: this.props.login.user.username,
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      profile_pic: null
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  componentDidMount(){
    document.title = "Amazon Clone - Password Change"
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      username: this.state.username,
      newPassword: this.state.newPassword,
      newPassword2: this.state.newPassword2,
      oldPassword: this.state.oldPassword
    }

    // send change password request
    this.props.changePassword(user, this.props.history, this.props.t)

    this.setState({ username: this.props.login.user.username })
    this.setState({ newPassword: '' })
    this.setState({ newPassword2: '' })
    this.setState({ oldPassword: '' })
    
  }

  // profile pic submit
  handlePicUpload = (e) => {
    e.preventDefault()
    
    let formData = new FormData()

    formData.append("profile_pic", this.state.profile_pic)

    // call to api
    this.props.updateUserProfilePic(formData, this.props.t)
  }

  // profile pic state update
  handlePicChange = (e) => {
    this.setState({ profile_pic: e.target.files[0] })
  }

  render() {
    return (
      <PasswordChangeView
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handlePicUpload={this.handlePicUpload}
        handlePicChange={this.handlePicChange}
        {...this.state}
      />
    )
  }
}


const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {
 changePassword,
 updateUserProfilePic
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PasswordChangeContainer))
