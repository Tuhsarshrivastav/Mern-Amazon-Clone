import React, { Component } from 'react'
import YourAddressesView from './YourAddressesView'

class YourAddressesContainer extends Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <YourAddressesView 
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default YourAddressesContainer
