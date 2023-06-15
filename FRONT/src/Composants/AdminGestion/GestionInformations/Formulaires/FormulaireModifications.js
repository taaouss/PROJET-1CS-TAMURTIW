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





function FormulaireModifications() {

  const [inputFields, setInputFields] = useState([
    {"id":1,"nom":"Inès","Jdebut":"Turquoise","Jfin":"Purple","Hdebut":"15:28","Hfin":"15:28","numero":863398034430},
    {"id":2,"nom":"Yú","Jdebut":"Mauv","Jfin":"Maroon","Hdebut":"15:28","Hfin":"15:28","numero":863398034430},
    {"id":3,"nom":"Célia","Jdebut":"Red","Jfin":"Violet","Hdebut":"15:28","Hfin":"15:28","numero":863398034430},
    {"id":4,"nom":"Mélina","Jdebut":"Aquamarine","Jfin":"Orange","Hdebut":"15:28","Hfin":"15:28","numero":863398034430}
  ]);
     
inputFields[0].Hdebut = "09:00";  
inputFields[0].Hfin = "18:00";


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
    setInputFields([...inputFields, { id: uuidv4(),"nom":"","Jdebut":"","Jfin":"","Hdebut":"","Hfin":"","numero":""}])
  }
  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <Container>
      <h2>Guides:</h2>
      <form >
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="nom"
              label="Nom du guide"
              variant="filled"
              type='text'
              value={inputField.nom}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="numero"
              label="Numero du guide"
              type="number"
              variant="filled"
              value={inputField.numero}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
              <TextField
              name="Jdebut"
              label="Jour début"
              variant="filled"
              type="text"
              value={inputField.Jdebut}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
             <TextField
              name="Jfin"
              label="Jour fin"
              variant="filled"
              type="text"
              value={inputField.Jfin}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
             <TextField
              name="Hdebut"
              label="De"
              variant="filled"
              type="text"   
              value={inputField.Hdebut}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
              <TextField
              name="Hfin"
              label="Jusquà"
              variant="filled"
              type="text" 
              value={inputField.Hfin}
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

export default FormulaireModifications