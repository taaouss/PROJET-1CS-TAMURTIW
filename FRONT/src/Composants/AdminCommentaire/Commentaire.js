import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import Ratingfun from './Rating'

function Commentaire(props) {
 const{nom,commentaire,image,note} =props;
  return (
   
    <div className='Commentaire'>
       <div className='hautCom'>
       <div className='pdp'> <img src={image} alt="visiteur" /></div>
        <h3>{nom}</h3></div> 
        <p>{commentaire}</p>
        <Ratingfun note={note}></Ratingfun>
     <div className='supprimer'>  <Button variant="outlined" size="small" startIcon={<DeleteIcon />}>
        Delete
      </Button></div>
    </div>
  )
}

export default Commentaire