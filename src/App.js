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
        [' ', ' ', '1️⃣', ' ', ' ', ' ', ' ', ' '],
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

  loadGameDiff = event => {
    axios
      .post('https://minesweeper-api.herokuapp.com/games/', { difficulty: 2 })
      .then(response => {
        let json = response.data
        // Do something with the json
        this.setState(json)
      })
  }
  check = (row, column) => {
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
  render() {
    return (
      <main>
        <h1>Mine Sweeper</h1>
        <table>
          <tbody>
            <tr>
              <td colSpan={this.state.board[0].length}>
                <label for="Diff">Difficulty:</label>
                <select id="diff-select">
                  <option value="">--Please choose a difficulty--</option>
                  <option value={this.loadGameDiff[0]}>Easy</option>
                  <option value="1">Not As Easy</option>
                  <option value="2">Good Luck!</option>
                </select>
                <button class="newGame" onClick={this.loadGameDiff}>
                  😈
                </button>
                <p>You are playing #{this.state.id}</p>
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
