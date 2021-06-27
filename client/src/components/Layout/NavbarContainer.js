import React, { Component } from "react";
import NavbarView from "./NavbarView";
export class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavbarView />
      </div>
    );
  }
}

export default NavbarContainer;
