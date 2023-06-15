import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const bull = (
  <Box
    component="span"
    sx={{ display: 'flex',flexDirection:'column', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function LieuCard(props) {
   
    return (
        <Card sx={{maxWidth:580,minWidth:580, maxHeight:130,display: 'flex',flexDirection:'row',gap:23,marginTop:3}}>
          <CardContent sx={{ margin:0}} >
            <Typography variant="h5" component="div">
                {props.lieu}
            </Typography>
            <Typography sx={{ fontSize: 14 }} variant="h4" gutterBottom>
             {props.type}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Employé : {props.employe}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Lieu"><Button sx={{ margin:0}} size="small" >En savoir plus</Button></Link>
          </CardActions>
        </Card>
      );
  
}

export default LieuCard