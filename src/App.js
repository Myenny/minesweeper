import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Cell from './Cell.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 8301,
      board: [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
      ],
      state: 'new',
      mines: 10,
      difficulty: 0
    }
  }
  selectGame = event => this.setState({ difficulty: event.target.value })
  loadGameDiff = event => {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.state.difficulty
      })
      .then(response => {
        let json = response.data
        // Do something with the json
        this.setState(json)
      })
  }
  check = (row, column) => {
    if (this.state.id === 0) {
      return
    }
    console.log(row)
    console.log(column)
    console.log('clicked from app')

    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
        { row: row, col: column }
      )
      .then(response => {
        let json = response.data
        // Do something with the json
        this.setState(json)
      })
  }

  flag = (row, column) => {
    if (this.state.id === 0) {
      return
    }
    console.log(row)
    console.log(column)
    console.log('clicked from app')

    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`,
        { row: row, col: column }
      )
      .then(response => {
        let json = response.data
        // Do something with the json
        this.setState(json)
      })
  }
  gameMessage = () => {
    if (this.state.id === 0) {
      return <p>Click me for a New game</p>
    }
    return <p>You are playing #{this.state.id}</p>
  }
  render() {
    return (
      <main>
        <h1>Mine Sweeper</h1>
        <table>
          <tbody>
            <tr class="header">
              <td colSpan={this.state.board[0].length}>
                <label for="Diff">Difficulty:</label>
                <select
                  value={this.state.difficulty}
                  onChange={this.selectGame}
                >
                  <option value="0">Easy</option>
                  <option value="1">Not As Easy</option>
                  <option value="2">Good Luck!</option>
                </select>
                <button class="newGame" onClick={this.loadGameDiff}>
                  😈
                </button>
                {this.gameMessage()}

                <p>There are {this.state.mines} mines</p>
              </td>
            </tr>
            {this.state.board.map((row, rowIndex) => {
              return (
                <tr>
                  {row.map((value, index) => {
                    return (
                      <Cell
                        value={value}
                        row={rowIndex}
                        column={index}
                        check={this.check}
                        flag={this.flag}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    )
  }
}

export default App
