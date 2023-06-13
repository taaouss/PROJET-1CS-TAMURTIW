import React from 'react'

function Transport(props) {
  return (
    <div className='Transport'>
    <h3>Option {props.num}</h3>
    <ul>Durée estimée du trajet :<h4>{props.duree}</h4> </ul>
    <ul>Mode de transport: <h4>{props.mode}</h4></ul>
    <ul>Lieu de départ :<h4>{props.lieu}</h4></ul>
    <ul>Moyen de transport écoresponsable :<h4>{props.eco ?  "oui": "non"}</h4></ul>
    </div>
  )
}

export default Transport