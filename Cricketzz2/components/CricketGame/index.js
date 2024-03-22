import {Component} from 'react'
import './index.css'

class CricketGame extends Component {
  state = {
    player1Score: 0,
    player2Score: 0,
    player1PlayCount: 0,
    player2PlayCount: 0,
    winner: null,
  }

  handleClickPlayer1 = () => {
    const {player1PlayCount, player2PlayCount, winner} = this.state

    if (player1PlayCount <= 6 && player2PlayCount <= 6 && winner === null) {
      const player1Score = Math.floor(Math.random() * 6) + 1

      this.setState(
        prevState => ({
          player1Score: prevState.player1Score + player1Score,
          player1PlayCount: prevState.player1PlayCount + 1,
        }),
        () => {
          if (player1PlayCount === 5 && player2PlayCount === 6) {
            this.determineWinner()
          }
        },
      )
    }
  }

  handleClickPlayer2 = () => {
    const {player1PlayCount, player2PlayCount, winner} = this.state

    if (player1PlayCount <= 6 && player2PlayCount <= 6 && winner === null) {
      const player2Score = Math.floor(Math.random() * 6) + 1

      this.setState(
        prevState => ({
          player2Score: prevState.player2Score + player2Score,
          player2PlayCount: prevState.player2PlayCount + 1,
        }),
        () => {
          if (player1PlayCount === 6 && player2PlayCount === 5) {
            this.determineWinner()
          }
        },
      )
    }
  }

  determineWinner = () => {
    const {player1Score, player2Score} = this.state
    const winner = player1Score > player2Score ? 'Player 1' : 'Player 2'
    this.setState({winner})
  }

  handlePlayAgain = () => {
    this.setState({
      player1Score: 0,
      player2Score: 0,
      player1PlayCount: 0,
      player2PlayCount: 0,
      winner: null,
    })
  }

  render() {
    const {
      player1Score,
      player2Score,
      player1PlayCount,
      player2PlayCount,
      winner,
    } = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">CRICKET GAME</h1>
        <div className="flex">
          <div className="player-container">
            <div className="player1-container">
              <h1 className="player-1-heading">Player 1</h1>
              <img
                src="https://imgur.com/y85Nanz.png"
                alt="player1"
                className="player-1-image"
              />
              <button
                type="button"
                className="button-1"
                onClick={this.handleClickPlayer1}
                disabled={
                  player1PlayCount > 6 ||
                  player2PlayCount > 6 ||
                  winner !== null
                }
              >
                Play
              </button>
              <p className="score-1">Score : {player1Score}</p>
              <p className="balls-faced1">
                Player 1 Balls Faced : {player1PlayCount}
              </p>
            </div>

            <div className="player2-container">
              <h1>Player 2</h1>
              <img
                src="https://imgur.com/22OG1y8.png"
                alt="player2"
                className="player-2-image"
              />
              <button
                type="button"
                className="button-2"
                onClick={this.handleClickPlayer2}
                disabled={
                  player2PlayCount > 6 ||
                  player1PlayCount > 6 ||
                  winner !== null
                }
              >
                Play
              </button>
              <p className="score-2">Score : {player2Score}</p>
              <p className="balls-faced1">
                Player 2 Balls Faced : {player2PlayCount}
              </p>
            </div>
          </div>
        </div>
        {winner && (
          <div className="winner-container">
            <h2 className="win-text">{winner} wins!</h2>
            <button
              onClick={this.handlePlayAgain}
              type="button"
              className="play-again"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default CricketGame
