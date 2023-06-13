import React from 'react'

function Evenement(props) {
  return (
    <div className='evenement' > 
        <div className='ED'> 
        <div className='ellipse'></div>
        <h3>{props.titre}</h3>
        </div>
        <h5>{props.dateDebut} au {props.dateFin}</h5>
        <p>{props.paragraphe}</p>
        <ul className='prix'>{props.gratuite} DA</ul>
    </div>
  )
}

export default Evenement