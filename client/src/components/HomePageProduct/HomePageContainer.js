import React, { Component } from "react";
import HomePageView from "./HomePageView";
export class HomePageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <HomePageView />
      </div>
    );
  }
}

export default HomePageContainer;
