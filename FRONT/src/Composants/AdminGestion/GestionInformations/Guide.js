import React from 'react'

function Guide(props) {
  return (
    <div className='Guide'>
     <h3>{props.nom} </h3>
     <p>du <h4>{props.Jdebut}</h4> au <h4>{props.Jfin}</h4></p>
     <p>de<h4>{props.Hdebut}</h4> jusqu'à <h4>{props.Hfin}</h4></p>
     <h4>{props.numero} </h4>
    </div>
  )
}

export default Guide