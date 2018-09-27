import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

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

  loadSampleGame = event => {
    axios
      .get("https://minesweeper-api.herokuapp.com/games/100")
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
        <label for="pet-select">Difficulty:</label>

        <select id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="0">Easy</option>
          <option value="1">Not As Easy</option>
          <option value="2">Good Luck!</option>
        </select>
        <table className="mineSweeperTable">
          <tbody>
            <tr>
              <td colSpan={this.state.board[0].length}>
                <button onClick={this.loadSampleGame}>Load New Game</button>
                <p>You are playing # {this.state.id}</p>
              </td>
            </tr>
            <tr className="rowOne">
              <td className="boxes">{this.state.board[0][1]}</td>
              <td className="boxes">{this.state.board[0][2]}</td>
              <td className="boxes">{this.state.board[0][3]}</td>
              <td className="boxes">{this.state.board[0][4]}</td>
              <td className="boxes">{this.state.board[0][5]}</td>
              <td className="boxes">{this.state.board[0][6]}</td>
              <td className="boxes">{this.state.board[0][7]}</td>
              <td className="boxes">{this.state.board[0][0]}</td>
            </tr>
            <tr className="rowTwo">
              <td className="boxes">{this.state.board[1][1]}</td>
              <td className="boxes">{this.state.board[1][2]}</td>
              <td className="boxes">{this.state.board[1][3]}</td>
              <td className="boxes">{this.state.board[1][4]}</td>
              <td className="boxes">{this.state.board[1][5]}</td>
              <td className="boxes">{this.state.board[1][6]}</td>
              <td className="boxes">{this.state.board[1][7]}</td>
              <td className="boxes">{this.state.board[1][0]}</td>
            </tr>
            <tr className="rowThree">
              <td className="boxes">{this.state.board[2][1]}</td>
              <td className="boxes">{this.state.board[2][2]}</td>
              <td className="boxes">{this.state.board[2][3]}</td>
              <td className="boxes">{this.state.board[2][4]}</td>
              <td className="boxes">{this.state.board[2][5]}</td>
              <td className="boxes">{this.state.board[2][6]}</td>
              <td className="boxes">{this.state.board[2][7]}</td>
              <td className="boxes">{this.state.board[2][0]}</td>
            </tr>
            <tr className="rowFour">
              <td className="boxes">{this.state.board[3][1]}</td>
              <td className="boxes">{this.state.board[3][2]}</td>
              <td className="boxes">{this.state.board[3][3]}</td>
              <td className="boxes">{this.state.board[3][4]}</td>
              <td className="boxes">{this.state.board[3][5]}</td>
              <td className="boxes">{this.state.board[3][6]}</td>
              <td className="boxes">{this.state.board[3][7]}</td>
              <td className="boxes">{this.state.board[3][0]}</td>
            </tr>
            <tr className="rowFive">
              <td className="boxes">{this.state.board[4][1]}</td>
              <td className="boxes">{this.state.board[4][2]}</td>
              <td className="boxes">{this.state.board[4][3]}</td>
              <td className="boxes">{this.state.board[4][4]}</td>
              <td className="boxes">{this.state.board[4][5]}</td>
              <td className="boxes">{this.state.board[4][6]}</td>
              <td className="boxes">{this.state.board[4][7]}</td>
              <td className="boxes">{this.state.board[4][0]}</td>
            </tr>
            <tr className="rowSix">
              <td className="boxes">{this.state.board[5][1]}</td>
              <td className="boxes">{this.state.board[5][2]}</td>
              <td className="boxes">{this.state.board[5][3]}</td>
              <td className="boxes">{this.state.board[5][4]}</td>
              <td className="boxes">{this.state.board[5][5]}</td>
              <td className="boxes">{this.state.board[5][6]}</td>
              <td className="boxes">{this.state.board[5][7]}</td>
              <td className="boxes">{this.state.board[5][0]}</td>
            </tr>
            <tr className="rowSeven">
              <td className="boxes">{this.state.board[6][1]}</td>
              <td className="boxes">{this.state.board[6][2]}</td>
              <td className="boxes">{this.state.board[6][3]}</td>
              <td className="boxes">{this.state.board[6][4]}</td>
              <td className="boxes">{this.state.board[6][5]}</td>
              <td className="boxes">{this.state.board[6][6]}</td>
              <td className="boxes">{this.state.board[6][7]}</td>
              <td className="boxes">{this.state.board[6][0]}</td>
            </tr>
            <tr className="rowEight">
              <td className="boxes">{this.state.board[7][1]}</td>
              <td className="boxes">{this.state.board[7][2]}</td>
              <td className="boxes">{this.state.board[7][3]}</td>
              <td className="boxes">{this.state.board[7][4]}</td>
              <td className="boxes">{this.state.board[7][5]}</td>
              <td className="boxes">{this.state.board[7][6]}</td>
              <td className="boxes">{this.state.board[7][7]}</td>
              <td className="boxes">{this.state.board[7][0]}</td>
            </tr>
          </tbody>
        </table>
        <button>NEW GAME</button>
      </main>
    );
  }
}

export default App;
