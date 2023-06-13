import React from 'react'
import  { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
function FormulaireDescription() {
    const [inputFields, setInputFields] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor magna sit amet tincidunt egestas. Nam dictum gravida lorem, eu placerat metus elementum id. In eu volutpat velit. Nunc pellentesque, tortor in pretium luctus, urna eros porttitor ipsum, in consectetur turpis velit at enim. Morbi turpis diam, fringilla quis mollis in, sollicitudin sed lacus. Sed placerat augue in vestibulum lobortis. Integer lacus elit, eleifend eget tempus malesuada, scelerisque eu ipsum. Mauris eget pellentesque velit."
      );

    return (
        <Container>
          <h2> Description:</h2>
          <form>
              <div >
                <TextField
                  label="Description"
                  variant="filled"
                  fullWidth 
                  type='text'
                  value={inputFields}
                  onChange={(e) => setInputFields(e.target.value)}
                />
              </div>   
          </form>
        </Container>
      )
    }

export default FormulaireDescription