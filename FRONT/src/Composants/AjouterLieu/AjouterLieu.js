import {React , useState}  from 'react'
import './AjouterLieu.css'

function AjouterLieu() {
  const [nomLieu, setnomLieu] = useState('');
  const [categorie, setCategorie] = useState('');
  const [employeLieu, setEmployeLieu] = useState('');
  const [description, setDescription] = useState('');
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setnomLieu('');
    setCategorie('');
    setDescription('');
    setLongitude("");
    setLatitude("");
  };
  return (
    <div>
    <div className='bar'/>
    <div className='containerA'>
    <div className='Map'></div>
    <div className='InfoContainer1'>      
    <form onSubmit={handleSubmit}>
    <div>
      <label className='gridLabel'>
         <p>Nom du lieu :</p>
        <input  className='Nom'type="text" value={nomLieu} onChange={(e) => setnomLieu(e.target.value)} />
      </label>
    </div>
    <div>
      <label className='gridLabel'>
        <p>Description du lieu :</p> 
        <input className='Description' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
    </div>
    <div>
      <label className='gridLabel'>
         <p>Employé du lieu :</p>
        <input  className='Nom'type="text" value={employeLieu} onChange={(e) => setEmployeLieu(e.target.value)} />
      </label>
    </div>
    <div>
      <label className='gridLabel' >
        <p>Catégorie du lieu :</p> 
        <select className='Categorie' value={categorie} onChange={(e) => setCategorie(e.target.value)}>
            <option value="">Sélectionnez une Catégorie</option>
            <option value="option1">Monuments historique</option>
            <option value="option2">Musées et galeries d'art</option>
            <option value="option3">Parcs nationaux et réserves naturelles </option>
            <option value="option4">Plages et stations balnéaires </option>
            <option value="option5">Villes et quartiers historiques</option>
            <option value="option6">Attractions culturelles</option>
            <option value="option7">Sites archéologiques </option>
            <option value="option8">Parcs à thème et parcs d'attractions</option>
            <option value="option9">Jardins botaniques</option>
            <option value="option10">autres</option>
          </select>
      </label>
    </div>
    <div className='coordonnees'>
      <div className='cooTop'>
      <p> Coordonnées du lieu :</p>
     <button className='selectionner'>Selectionner sur la carte</button>
      </div>
      <label className='gridLabel' >
        Longitude :
        <input className='Longitude' type="number" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <label className='gridLabel'> 
        Latitude :
        <input className='Latitude' type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
    </div>
    <div>
      <button className='btnSubmit' type="submit">Ajouter le lieu</button>
    </div>
  </form>
     </div>
    </div>
    </div>
  
  )
}
export default AjouterLieu