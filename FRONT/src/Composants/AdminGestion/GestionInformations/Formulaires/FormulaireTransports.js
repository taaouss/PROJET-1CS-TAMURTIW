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
import MenuItem from '@mui/material/MenuItem';



function FormulaireTransports() {
    const [inputFields, setInputFields] = useState([
        {"duree":"3:23 PM","mode":"rhoncus","lieu":"96419 Linden Court","eco":false},
    {"duree":11,"mode":"lacinia","lieu":"5 Westridge Pass","eco":true},
    {"duree":9,"mode":"ac","lieu":"08027 Fairfield Drive","eco":true},
    {"duree":22,"mode":"consectetuer adipiscing","lieu":"46 Becker Court","eco":true},
      ]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
      };
    
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
        setInputFields([...inputFields, { id: uuidv4(),"duree":"","mode":"","lieu":"","eco":""}])
      }
      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }
      const currencies = [
        {
          value: true,
          label: 'oui',
        },
        {
          value: false,
          label: 'non',
        }]
    
      return (
        <Container>
          <h2>Transports:</h2>
          <form onSubmit={handleSubmit}>
            { inputFields.map(inputField => (
              <div key={inputField.id}>
                <TextField
                  name="mode"
                  label="moyen de transport"
                  variant="filled"
                  type='text'
                  value={inputField.mode}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="lieu"
                  label="Lieu du départ"
                  type="text"
                  variant="filled"
                  value={inputField.lieu}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                  <TextField
                  name="duree"
                  label="Durée estimée en minutes"
                  helperText="Veuillez entrer la durée estimée en minutes"
                  variant="filled"
                  type='number'
                  value={inputField.duree}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
            
                  <TextField
                    name="eco"
                    label="écoresponsable ?"
                    variant="filled"
                    select
                    defaultValue="oui"
                    value={inputField.eco}
                    helperText="Veuillez sélectionner votre choix"
                    onChange={event => handleChangeInput(inputField.id, event)}
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
               
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

export default FormulaireTransports