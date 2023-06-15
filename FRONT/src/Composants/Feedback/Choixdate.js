import React, { useState } from 'react';
import './Choixdate.css';

function Choixdate() {

  const [date,setDate]=useState();
  console.log("Date", date);

  return(
    <div className="main"> 
    <h1> Choisir une date: {date} </h1>
    <input type="date" onChange={e=>setDate(e.target.value)} />
    </div>
  );
}
export default Choixdate;