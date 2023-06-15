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
import { Link } from 'react-router-dom'

export default function FormulaireAjouterEvenement() {
    const [inputFields, setInputFields] = useState([
      {"id":1,
        "dateDebut":'20 Mars 2023', 
      "dateFin":'20 Avril 2023',
     "gratuite":0,
       "titre":'La fête du printemps',
       "paragraphe":"Cet événement célèbre l'arrivée du printemps dans la région de Yakouren. Les habitants de la ville se réunissent pour participer à des activités traditionnelles telles que la danse et la musique, ainsi que pour déguster des plats locaux préparés pour l'occasion. La fête comprend également des compétitions sportives et des spectacles de rue mettant en vedette des artistes locaux"
    },
    {  "id":2,
       "dateDebut":'03 Aout 2023',
       "dateFin":'20 Avril 2024',
       "gratuite":140,
       "titre":'L’évenement du Tapis',
        "paragraphe":" Cet événement met en avant l'artisanat local et les tapis berbères de la région. Les visiteurs peuvent admirer les œuvres d'art colorées et complexes, ainsi que participer à des ateliers pour apprendre à tisser un tapis berbère traditionnel. Il y a également des spectacles de musique et de danse traditionnelles, ainsi que des stands de nourriture proposant des plats locaux et des spécialités culinaires de la région."
    },
    {  "id":3,
       "dateDebut":'20 Novembre 2023',
        "dateFin":'20 Avril 2024',
       "gratuite":500,
        "titre":'Le festival de la culture',
        "paragraphe":"Yakouren est une ville connue pour sa riche culture amazighe. Un festival de la culture amazighe serait donc un événement approprié pour célébrer cette culture locale. Le festival comprendrait des présentations de musique traditionnelle, des expositions d'art et d'artisanat amazigh, des ateliers de cuisine amazighe, des conférences sur l'histoire et la culture amazighes et des spectacles de danse amazighe. Ce serait une occasion pour les gens de la région et les visiteurs de découvrir et d'apprécier la culture amazighe unique de Yakouren."
    }]);
     
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
        setInputFields([...inputFields, { id: uuidv4(),"dateDebut":"","dateFin":"","gratuite":"","titre":"","paragraphe":""}])
      }
      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", "");
      };
      return (
        <>
        <div className='bar'/>
        <div className='FormulaireAjouterLieu'>
           <Container >
          <form>
          <h2>Mise à jour des évenements :</h2>
          { inputFields.map(inputField =>(
              <div key={inputField.id} >
                <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  onClick={handleAddFields}
                >
                  <AddIcon />
                </IconButton>
                <TextField
                  name="titre"
                  label="Nom de l'évènement"
                  variant="filled"
                  type='text'
                  value={inputField.titre}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="dateDebut"
                  label="Début de l'évenement"
                  type="text"
                  variant="filled"
                  value={inputField.dateDebut}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                 <TextField
                  name="dateFin"
                  label="Fin de l'évènement"
                  variant="filled"
                  type="text"
                  value={inputField.dateFin}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                  <TextField
                  name="gratuite"
                  label="Prix du passe "
                  variant="filled"
                  type="number"
                  value={inputField.gratuite}
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                <div className='desMax'>
                <TextField
                  name="paragraphe"
                  label="Description de l'évènement"
                  variant="filled"
                  type="text"
                  value={inputField.paragraphe}
                  multiline
                  maxRows={4}
                  fullWidth
                  onChange={event => handleChangeInput(inputField.id, event)}
                />
                </div>
                
              </div>
            )) }
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
          </form>
        </Container>
        </div>
        </>
      )
    }