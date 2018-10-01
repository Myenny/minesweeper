import React, { Component } from "react";

class Cell extends Component {
  check = event => {
    this.props.check(this.props.row, this.props.column);
  };

  flag = event => {
    event.preventDefault();
    this.props.flag(this.props.row, this.props.column);
  };

  render() {
    return (
      <td onContextMenu={this.flag} onClick={this.check}>
        {this.props.value}
      </td>
    );
  }
}

export default Cell;
