import React from 'react'
import  { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Icon from '@mui/material/Icon';
import { v4 as uuidv4 } from 'uuid';

function FormulaireUrgences() {
    const [inputFields, setInputFields] = useState([
      {"id":1,"type":"Aquamarine","nom":"Andalax","contact":5935},
    {"id":2,"type":"Puce","nom":"Job","contact":370},
    {"id":3,"type":"Crimson","nom":"Ventosanzap","contact":6994},
      ]);

      const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
      }
    
      const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),"contact":"","nom":"","type":""}])
      }
      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }
    
      return (
        <Container>
          <h2>Urgences :</h2>
          <form >
            { inputFields.map(inputField => (
              <div key={inputField.id}>
                  <TextField
                  name="type"
                  label="type de l'établissement"
                  variant="filled"
                  type="text"
                  value={inputField.type}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="nom"
                  label="Nom de l'établissement"
                  variant="filled"
                  type='text'
                  value={inputField.nom}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="contact"
                  label="Contact de l'établissement"
                  type="number"
                  variant="filled"
                  value={inputField.contact}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                
            
                <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  onClick={handleAddFields}
                >
                  <AddIcon />
                </IconButton>
              </div>
            )) }
        
          </form>
        </Container>
  )
}

export default FormulaireUrgences