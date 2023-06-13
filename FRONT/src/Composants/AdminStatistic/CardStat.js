import React from 'react'

function CardStat(props) {
  return (
    <div className='CardStat'>
       <h3>{props.name}</h3>
       <h1>{props.number}</h1>
    </div>
  )
}

export default CardStat