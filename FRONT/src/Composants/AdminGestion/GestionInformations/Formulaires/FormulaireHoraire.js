import React from 'react'
import  { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

function FormulaireHoraire() {
    const [inputFields, setInputFields] = useState(
        {Jdebut:"Dimanche",Jfin:"Samedi",ouverture:new Date(),fermeture:new Date()}
      );
         
    inputFields.ouverture = "09:00";  
    inputFields.fermeture = "18:00";
    const handleChangeJdebut = (event) => {
        setInputFields({
          ...inputFields,
          Jdebut: event.target.value
        });
      };
    
      const handleChangeJfin = (event) => {
        setInputFields({
          ...inputFields,
          Jfin: event.target.value
        });
      };
    
      const handleChangeOuverture = (event) => {
        setInputFields({
          ...inputFields,
          ouverture: event.target.value
        });
      };
    
      const handleChangeFermeture = (event) => {
        setInputFields({
          ...inputFields,
          fermeture: event.target.value
        });
      };

    
    
      return (
        <Container>
          <h2>Horaires:</h2>
          <form>
              <div >
                <TextField
                  name="Jdebut"
                  label="ouvert du"
                  variant="filled"
                  type='text'
                  value={inputFields.Jdebut}
                  onChange={event => handleChangeJdebut( event)}
                />
                <TextField
                  name="numero"
                  label="au"
                  type="text"
                  variant="filled"
                  value={inputFields.Jfin}
                  onChange={event => handleChangeJfin( event)}
                />
                 <TextField
                  name="ouverture"
                  label="De"
                  variant="filled"
                  type="text"
                  value={inputFields.ouverture}
                  onChange={event => handleChangeOuverture( event)}
                />
                  <TextField
                  name="fermeture"
                  label="Jusquà"
                  variant="filled"
                  type="text"
                  value={inputFields.fermeture}
                  onChange={event => handleChangeFermeture( event)}
                />
              </div>   
          </form>
        </Container>
      )
    }
export default FormulaireHoraire