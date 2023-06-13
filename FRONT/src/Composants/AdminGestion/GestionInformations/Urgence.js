import React from 'react'

function Urgence(props) {
  return (
    <div className='Urgence'>
        <h3>{props.type}</h3>
        <p>{props.nom}, {props.contact}</p>
    </div>
  )
}

export default Urgence