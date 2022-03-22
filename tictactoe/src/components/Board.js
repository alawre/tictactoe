import React from 'react'
import Square from './Square'

function Board() {
  const renderSquare = (i) => {
    return (
      <Square value={i} />
    )
  }
  return (
    <div>Board
      <div className='board-row'>
      {renderSquare()}{renderSquare()}{renderSquare()}
      </div>
      <div className='board-row'>
      {renderSquare()}{renderSquare()}{renderSquare()}
      </div><div className='board-row'>
      {renderSquare()}{renderSquare()}{renderSquare()}
      </div>
    </div>
  )
}

export default Board