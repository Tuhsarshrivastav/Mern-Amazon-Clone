import React, { Component } from 'react'
import NewAddressView from './NewAddressView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class NewAddressContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      full_name: '',
      mobile_number: '',
      pin_code: '',
      house_no: '',
      street: '',
      landmark: '',
      city: ''
    }

  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)
  }


  render() {
    return (
      <NewAddressView 
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewAddressContainer))