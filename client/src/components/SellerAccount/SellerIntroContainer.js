import React, { Component } from 'react'
import SellerIntroView from './SellerIntroView'

class SellerIntroContainer extends Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount(){
    document.title = "Amazon Clone - Seller Intro"
  }


  render() {
    return (
      <SellerIntroView 
        {...this.props}
        {...this.state}
      />
    )
  }
}


export default SellerIntroContainer
