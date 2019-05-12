import React, {Component} from 'react';
import GameTile from './GameTile'
import './GameBoard.css'
import Logo from '../images/logo.png'

class GameBoard extends Component {
constructor(props){
  super(props);
  this.state = {
    tiles: Array(9).fill(null),
    xIsNext: true
  }
}

  renderTile(index) {
    return (
      <GameTile
        value = {this.state.tiles[index]}
        onClick = {() => this.handleClick(index)}
      />
    )
  }

  handleClick(index) {
    const updatedTiles = this.state.tiles.slice();
    updatedTiles[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      tiles: updatedTiles,
      xIsNext: !this.state.xIsNext
    });
  }


  render() {
    const winner = this.props.calculateWinner(this.state.tiles);
    let turn
    if (winner) {
      turn = `Well done - Player ` + winner + ' wins!'
    } else{
      turn = `It's player ` + (this.state.xIsNext ? 'X' : 'O') + `'s turn`
    }

    return (

      <div className="board">
        <img src={Logo} alt='Tic Tac Toe'/>
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
        <div className="board-row">
          {this.renderTile(3)}
          {this.renderTile(4)}
          {this.renderTile(5)}
        </div>
        <div className="board-row">
          {this.renderTile(6)}
          {this.renderTile(7)}
          {this.renderTile(8)}
        </div>
        <div className="turn">{turn}</div>
      </div>
    );


  }
}

export default GameBoard;
