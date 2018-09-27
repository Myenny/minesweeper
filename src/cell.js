import React, { Component } from "react";

class Cell extends Component {
  state = {};
  render() {
    return <td>{this.props.cell}</td>;
  }
}

export default Cell;
