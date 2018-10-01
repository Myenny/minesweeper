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
    let outPut = this.props.value;
    if (this.props.value === "*") {
      outPut = "💣";
    }
    if (this.props.value === "@") {
      outPut = "💣";
    }
    if (this.props.value === "F") {
      outPut = "⛳️";
    }
    if (this.props.value === "_") {
      outPut = " ";
    }

    let clickedBox = "not-clicked";
    if (
      this.props.value === "*" ||
      this.props.value === "@" ||
      this.props.value === "F" ||
      this.props.value === "1" ||
      this.props.value === "2" ||
      this.props.value === "3" ||
      this.props.value === "4"
    ) {
      clickedBox = "clicked";
    }

    return (
      <td className={clickedBox} onContextMenu={this.flag} onClick={this.check}>
        {outPut}
      </td>
    );
  }
}

export default Cell;
