import React, { Component } from "react";
import FooterView from "./FooterView";
export class FooterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <FooterView />
      </>
    );
  }
}

export default FooterContainer;
