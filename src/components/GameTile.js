import React from 'react';
import './GameTile.css'

const GameTile = (props) => {
    return (
      <button
        className="tile"
        onClick={() => props.onClick({value: 'X'})}
      >
        {props.value}
      </button>
    )
}

export default GameTile;
