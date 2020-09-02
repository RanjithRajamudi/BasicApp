import React, { Component } from "react";
import "./Header.scss";
class Header extends Component {
  render() {
    return (
      <div id="header-id" className="fakeheader">
        <h1 style={{ color: "white" }}>React-Redux Demo</h1>
      </div>
    );
  }
}

export default Header;
