import React, { Component } from 'react'

class Cell extends Component {
  check = event => {
    this.props.check(this.props.row, this.props.column)
  }

  flag = event => {
    event.preventDefault()
    this.props.flag(this.props.row, this.props.column)
  }

  render() {
    let outPut = this.props.value
    if (this.props.value === '*') {
      outPut = '💣'
    }
    if (this.props.value === '@') {
      outPut = '🍀'
    }
    if (this.props.value === 'F') {
      outPut = '⛳️'
    }
    if (this.props.value === '_') {
      outPut = ' '
    }
    if (this.props.value === 1) {
      outPut = '1️⃣'
    }
    if (this.props.value === 2) {
      outPut = '2️⃣'
    }
    if (this.props.value === 3) {
      outPut = '3️⃣'
    }
    if (this.props.value === 4) {
      outPut = '4️⃣'
    }
    if (this.props.value === 5) {
      outPut = '5️⃣'
    }
    if (this.props.value === 6) {
      outPut = '6️⃣'
    }

    let clickedBox = 'not-clicked'
    if (
      this.props.value === '*' ||
      this.props.value === '@' ||
      this.props.value === 'F' ||
      this.props.value === '_' ||
      this.props.value === 1 ||
      this.props.value === 2 ||
      this.props.value === 3 ||
      this.props.value === 4
    ) {
      clickedBox = 'clicked'
    }

    return (
      <td className={clickedBox} onContextMenu={this.flag} onClick={this.check}>
        {outPut}
      </td>
    )
  }
}

export default Cell
