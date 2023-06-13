import React from 'react'
import Evenement from './Evenement';
function Evenements(props) {
    
  return (
    <div> <div className='Evenements' style={{ maxHeight: '320px', overflow: 'auto' }}>
            {props.data.map((item) => (
            <div key={item.id+100}>
            <Evenement dateDebut={item.dateDebut} titre={item.titre} paragraphe={item.paragraphe} gratuite={item.gratuite} dateFin={item.dateFin}/>
            </div>
            ))}
            </div>
            <button className='ajouter'>Ajouter un événement</button>
            <div className='nombre'>Nombre total d'événements est  :<div className='resultat'>{props.data.length}</div></div></div>
  )
}

export default Evenements