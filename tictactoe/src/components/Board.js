import React from 'react'
import Square from './Square'

function Board() {
  return (
    <div>Board
      <div className='board-row'>
      <Square /><Square /><Square />
      </div>
    </div>
  )
}

export default Board