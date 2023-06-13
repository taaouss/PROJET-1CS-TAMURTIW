import React from 'react'
import Horaires from './Horaires'
import Description from './Description'
import Urgence from './Urgence'
import Guide from './Guide'
import Transport from './Transport'
import { Link } from 'react-router-dom'

function Informations(props) {
    const transports=[{"duree":"3:23 PM","mode":"rhoncus","lieu":"96419 Linden Court","eco":false},
    {"duree":11,"mode":"lacinia","lieu":"5 Westridge Pass","eco":true},
    {"duree":9,"mode":"ac","lieu":"08027 Fairfield Drive","eco":true},
    {"duree":22,"mode":"consectetuer adipiscing","lieu":"46 Becker Court","eco":true},]
    const guides=[{"nom":"Inès","Jdebut":"Turquoise","Jfin":"Purple","Hdebut":"15:28","Hfin":"15:28","numero":863398034430},
    {"nom":"Yú","Jdebut":"Mauv","Jfin":"Maroon","Hdebut":"15:28","Hfin":"15:28","numero":863398034430},
    {"nom":"Célia","Jdebut":"Red","Jfin":"Violet","Hdebut":"15:28","Hfin":"15:28","numero":863398034430},
    {"nom":"Mélina","Jdebut":"Aquamarine","Jfin":"Orange","Hdebut":"15:28","Hfin":"15:28","numero":863398034430}]
    guides.map((item)=>{item.Hdebut ="09:00" ;item.Hfin="18:00"});
    const horaires={Jdebut:"Indigo",Jfin:"Indigo",ouverture:"15:28",fermeture:"15:28"}
    const urgences=[{"type":"Aquamarine","nom":"Andalax","contact":5935},
    {"type":"Puce","nom":"Job","contact":370},
    {"type":"Crimson","nom":"Ventosanzap","contact":6994}]
    const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor magna sit amet tincidunt egestas. Nam dictum gravida lorem, eu placerat metus elementum id. In eu volutpat velit. Nunc pellentesque, tortor in pretium luctus, urna eros porttitor ipsum, in consectetur turpis velit at enim. Morbi turpis diam, fringilla quis mollis in, sollicitudin sed lacus. Sed placerat augue in vestibulum lobortis. Integer lacus elit, eleifend eget tempus malesuada, scelerisque eu ipsum. Mauris eget pellentesque velit."
  return (
    <div className='INFOS' style={{ maxHeight: '450px', overflow: 'auto' }}>
        <div className='topInfo'><div className='sect'><h2 >Horaires</h2></div><Link to="/Formulaire"><button className='modifierB'>Modifier</button></Link></div>
        <Horaires Jdebut={horaires.Jdebut} Jfin={horaires.Jfin} ouverture={horaires.ouverture} fermeture={horaires.fermeture}> </Horaires>
        <div className='sect'><h2 >Description</h2></div>
        <Description paragraphe={description}/>
        <div className='sect'><h2 >Urgences</h2></div>
          {
            urgences.map((item)=>(<div><Urgence type={item.type} nom={item.nom} contact={item.contact}/></div>) 

            )
          }
          <div className='sect'><h2 >Guides</h2></div>
          {
            guides.map((item)=>(<div><Guide nom={item.nom} numero={item.numero} Jdebut={item.Jdebut} Jfin={item.Jfin} Hdebut={item.Hdebut} Hfin={item.Hfin}/></div>) 

            )
          }
            <div className='sect'><h2 >Transports</h2></div>
          {
            transports.map((item,index)=>(<div><Transport duree={item.duree} mode={item.mode} lieu={item.lieu} eco={item.eco} num={index+1}/></div>) 

            )
          }

    </div>
  )
}

export default Informations