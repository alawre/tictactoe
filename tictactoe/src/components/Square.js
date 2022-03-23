import React, { useState } from 'react'

function Square(props) {
  return (
    <button className='square'
    onClick={props.onClickEvent}
    >
      {props.value}
      
      </button>
  )
}

export default Square
