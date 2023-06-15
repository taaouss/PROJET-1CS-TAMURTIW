import React from 'react'
import LieuCard from './LieuCard'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
const data =[
    {   id:1,
        lieu:"Tigzirt",
        employe:"hamid",
        type:"Plages et stations balnéaires"
    },{
        id:2,
        lieu:"Jardin El Hamma",
        employe:"hamidouche",
        type:"Jardins botaniques"
    },{
        id:3,
        lieu:"les beaux arts",
        employe:"mustapha",
        type:"Musées et galeries d'art" 
    },
    {   id:4,
        lieu:"Tigzirt",
        employe:"hamid",
        type:"Plages et stations balnéaires"
    },{
        id:5,
        lieu:"Jardin El Hamma",
        employe:"hamidouche",
        type:"Jardins botaniques"
    },{
        id:6,
        lieu:"les beaux arts",
        employe:"mustapha",
        type:"Musées et galeries d'art" 
    }]
function ListeLieux() {
    
  return (
    <div style={{marginTop:20,border:'5px solid  rgb(0, 126, 167,0.4)',borderRadius:10, maxHeight: '580px', overflow: 'auto',display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:"#F0F0F2" }}>
      <div style={{display: 'flex',flexDirection:'row',gap:20}}>
      <h2 style={{color:"rgb(0, 126, 167)"}}>Les lieux touristiques disponibles sur la carte :</h2>
       <Link style={{padding:15}}to='/AjouterLieu'><Button variant="outlined">Ajouter un lieu</Button></Link>
      </div>
    
        {
            data.map((lieu)=>(
            <div key={lieu.id}>
                <LieuCard lieu={lieu.lieu} employe={lieu.employe} type={lieu.type}></LieuCard>
            </div>))
        }
    </div>
  )
}

export default ListeLieux