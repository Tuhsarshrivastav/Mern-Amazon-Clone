import React from 'react'
import ImageSlider from './ImageSlider';
import HomePageProductContainer from './../HomePageProduct/HomePageProductContainer';

function LandingPage(props) {
  document.title = "Online site for shopping."
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
      </div>
    </React.Fragment>
  )
}

export default LandingPage;
