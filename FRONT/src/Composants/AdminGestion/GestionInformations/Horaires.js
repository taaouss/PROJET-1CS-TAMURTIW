import React from 'react'

function Horaires(props) {
  return (
    <div className='Horaires'>
        <h3>Ouverture :{props.ouverture}</h3>
        <h3>Fermeture :{props.fermeture}</h3>
        <p>Ouvert du <h3>{props.Jdebut}</h3> au <h3>{props.Jfin}</h3> </p>
    </div>
  )
}

export default Horaires