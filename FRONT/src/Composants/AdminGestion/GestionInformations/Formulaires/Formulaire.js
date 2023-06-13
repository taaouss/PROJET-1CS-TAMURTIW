import React from 'react'
import FormulaireHoraire from './FormulaireHoraire'
import FormulaireDescription from './FormulaireDescription'
import FormulaireModifications from './FormulaireModifications'
import FormulaireUrgences from './FormulaireUrgences'
import FormulaireTransports from './FormulaireTransports'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom'

function Formulaire() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", "");
      };
  return (
    <>
    <div className='bar'/>
    <div className='FormulaireModif'>
        <FormulaireHoraire></FormulaireHoraire>
        <FormulaireDescription></FormulaireDescription>
        <FormulaireModifications></FormulaireModifications>
        <FormulaireUrgences></FormulaireUrgences>
        <FormulaireTransports></FormulaireTransports>
        <Button
            className='btnformulaire'
            variant="contained" 
            color="primary" 
            type="submit" 
            endIcon={<Icon>send</Icon>}
            onClick={handleSubmit}
          >Enregistrer</Button>
              <Link to='/'><Button
            className='btnformulaire'
            variant="contained" 
            color="primary" 
            type="button"
          >retour</Button></Link> 
    </div></>
    
  )
}

export default Formulaire