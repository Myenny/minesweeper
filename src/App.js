import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Cell from "./Cell.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 8301,
      board: [
        [" ", "💣", "1️⃣", "⛳", " ", " ", " ", " "],
        [" ", "💣", "1️⃣", " ", " ", " ", " ", " "],
        [" ", "💣", "1️⃣", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "]
      ],
      state: "new",
      mines: 10,
      difficulty: 0
    };
  }

  loadGameDiff = event => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games/")
      .then(response => {
        let json = response.data;
        // Do something with the json
        this.setState(json);
      });
  };
  check = (row, column) => {
    console.log(row);
    console.log(column);
    console.log("clicked from app");

    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
        { row: row, col: column }
      )
      .then(response => {
        let json = response.data;
        // Do something with the json
        this.setState(json);
      });
  };

  flag = (row, column) => {
    console.log(row);
    console.log(column);
    console.log("clicked from app");

    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`,
        { row: row, col: column }
      )
      .then(response => {
        let json = response.data;
        // Do something with the json
        this.setState(json);
      });
  };
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
                <p>There are # mines</p>
              </td>
            </tr>
            <tr>
              {this.state.board[0].map((value, columnIndex) => {
                <Cell
                  value={this.state.board[0][0]}
                  row={0}
                  column={columnIndex}
                  check={this.check}
                  flag={this.flag}
                />;
              })}
              <Cell
                value={this.state.board[0][0]}
                row={0}
                column={0}
                check={this.check}
                flag={this.flag}
              />
              <Cell
                value={this.state.board[0][1]}
                row={0}
                column={1}
                check={this.check}
                flag={this.flag}
              />
              <Cell
                value={this.state.board[0][2]}
                row={0}
                column={2}
                check={this.check}
                flag={this.flag}
              />
              <Cell
                value={this.state.board[0][3]}
                row={0}
                column={3}
                check={this.check}
                flag={this.flag}
              />
              <Cell
                value={this.state.board[0][4]}
                row={0}
                column={4}
                check={this.check}
                flag={this.flag}
              />
              <Cell
                value={this.state.board[0][5]}
                row={0}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[0][6]}
                row={0}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[0][7]}
                row={0}
                column={7}
                check={this.check}
              />
            </tr>
            <tr className="rowTwo">
              <Cell
                value={this.state.board[1][1]}
                row={1}
                column={0}
                check={this.check}
              />
              <Cell
                value={this.state.board[1][2]}
                row={1}
                column={1}
                check={this.check}
              />
              <Cell
                value={this.state.board[1][3]}
                row={1}
                column={2}
                check={this.check}
              />
              <Cell
                value={this.state.board[1][4]}
                row={1}
                column={3}
                check={this.check}
              />
              <Cell
                value={this.state.board[1][5]}
                row={1}
                column={4}
                check={this.check}
              />
              <Cell
                value={this.state.board[1][6]}
                row={1}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[1][7]}
                row={1}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[1][0]}
                row={1}
                column={7}
                check={this.check}
              />
            </tr>
            <tr className="rowThree">
              <Cell
                value={this.state.board[2][1]}
                row={2}
                column={0}
                check={this.check}
              />
              <Cell
                value={this.state.board[2][2]}
                row={2}
                column={1}
                check={this.check}
              />
              <Cell
                value={this.state.board[2][3]}
                row={2}
                column={2}
                check={this.check}
              />
              <Cell
                value={this.state.board[2][4]}
                row={2}
                column={3}
                check={this.check}
              />
              <Cell
                value={this.state.board[2][5]}
                row={2}
                column={4}
                check={this.check}
              />
              <Cell
                value={this.state.board[2][6]}
                row={2}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[2][7]}
                row={2}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[2][0]}
                row={2}
                column={7}
                check={this.check}
              />
            </tr>
            <tr className="rowFour">
              <Cell
                value={this.state.board[3][1]}
                row={3}
                column={1}
                check={this.check}
              />
              <Cell
                value={this.state.board[3][2]}
                row={3}
                column={2}
                check={this.check}
              />
              <Cell
                value={this.state.board[3][3]}
                row={3}
                column={3}
                check={this.check}
              />
              <Cell
                value={this.state.board[3][4]}
                row={3}
                column={4}
                check={this.check}
              />
              <Cell
                value={this.state.board[3][5]}
                row={3}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[3][6]}
                row={3}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[3][7]}
                row={3}
                column={7}
                check={this.check}
              />
              <Cell
                value={this.state.board[3][0]}
                row={3}
                column={0}
                check={this.check}
              />
            </tr>
            <tr className="rowFive">
              <Cell
                value={this.state.board[4][1]}
                row={4}
                column={0}
                check={this.check}
              />
              <Cell
                value={this.state.board[4][2]}
                row={4}
                column={1}
                check={this.check}
              />
              <Cell
                value={this.state.board[4][3]}
                row={4}
                column={2}
                check={this.check}
              />
              <Cell
                value={this.state.board[4][4]}
                row={4}
                column={3}
                check={this.check}
              />
              <Cell
                value={this.state.board[4][5]}
                row={4}
                column={4}
                check={this.check}
              />
              <Cell
                value={this.state.board[4][6]}
                row={4}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[4][7]}
                row={4}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[4][0]}
                row={4}
                column={7}
                check={this.check}
              />
            </tr>
            <tr className="rowSix">
              <Cell
                value={this.state.board[5][2]}
                row={5}
                column={1}
                check={this.check}
              />
              <Cell
                value={this.state.board[5][1]}
                row={5}
                column={0}
                check={this.check}
              />
              <Cell
                value={this.state.board[5][3]}
                row={5}
                column={2}
                check={this.check}
              />
              <Cell
                value={this.state.board[5][4]}
                row={5}
                column={3}
                check={this.check}
              />
              <Cell
                value={this.state.board[5][5]}
                row={5}
                column={4}
                check={this.check}
              />
              <Cell
                value={this.state.board[5][6]}
                row={5}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[5][7]}
                row={5}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[5][0]}
                row={5}
                column={7}
                check={this.check}
              />
            </tr>
            <tr className="rowSeven">
              <Cell
                value={this.state.board[6][1]}
                row={6}
                column={0}
                check={this.check}
              />
              <Cell
                value={this.state.board[6][2]}
                row={6}
                column={1}
                check={this.check}
              />
              <Cell
                value={this.state.board[6][3]}
                row={6}
                column={2}
                check={this.check}
              />
              <Cell
                value={this.state.board[6][4]}
                row={6}
                column={3}
                check={this.check}
              />
              <Cell
                value={this.state.board[6][5]}
                row={6}
                column={4}
                check={this.check}
              />
              <Cell
                value={this.state.board[6][6]}
                row={6}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[6][7]}
                row={6}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[6][0]}
                row={6}
                column={7}
                check={this.check}
              />
            </tr>
            <tr className="rowEight">
              <Cell
                value={this.state.board[7][1]}
                row={7}
                column={0}
                check={this.check}
              />
              <Cell
                value={this.state.board[7][2]}
                row={7}
                column={1}
                check={this.check}
              />
              <Cell
                value={this.state.board[7][3]}
                row={7}
                column={2}
                check={this.check}
              />
              <Cell
                value={this.state.board[7][4]}
                row={7}
                column={3}
                check={this.check}
              />
              <Cell
                value={this.state.board[7][5]}
                row={7}
                column={4}
                check={this.check}
              />
              <Cell
                value={this.state.board[7][6]}
                row={7}
                column={5}
                check={this.check}
              />
              <Cell
                value={this.state.board[7][7]}
                row={7}
                column={6}
                check={this.check}
              />
              <Cell
                value={this.state.board[7][0]}
                row={7}
                column={7}
                check={this.check}
              />
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}

export default App;
