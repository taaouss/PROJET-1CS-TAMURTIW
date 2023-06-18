// lyes
import React, { useState,useRef,useEffect } from 'react'
import './style.css'

const SearchBar = ({handleFilter}) => {
    const [listecommune, setListecommune] = useState(null);
  const [listewilaya, setListewilaya] = useState(null);

    useEffect(() => {
        fetch("http://localhost:9000/commune/" )
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the data for that resource ");
            }
            return res.json();
          })
          .then((data) => {
            setListecommune(data);
            
          })
          .catch((err) => {
            // setError(err.message);
            console.log("erreur")
          });
          fetch("http://localhost:9000/wilaya/" )
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the data for that resource ");
            }
            return res.json();
          })
          .then((data) => {
            setListewilaya(data);
            console.log(listewilaya);
            
          })
          .catch((err) => {
            console.log("erreur")
          });
      }, []);
    

    const ref1 = useRef();
    const ref = useRef();
    
    const [search,setSearch]=useState('');
    const [type,setType]=useState('');
    const [wilaya,setWilaya]=useState('');
    const [commune,setCommune]=useState('');
    const [datedebut,setDatedebut]=useState('');
    const [datefin,setDatefin]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        const annonceSearch ={search,type}
        console.log(annonceSearch);
        handleFilter(annonceSearch);
    }

    return ( 
        
        <form className="Containersearch_filter" onSubmit={handleSubmit}>
            
            <div className="ContainerFilter">
                <select className='type selectcase' 
                value={type}
                onChange={(e)=> setType(e.target.value)}
                >
                    <option value=""  selected>Selectionner la categorie</option>
                    <option value="Sites archéologiques">Sites archéologiques</option>
                    <option value="Parcs nationaux et réserves naturelles">Parcs nationaux et réserves naturelles</option>
                    <option value="Monument historique">Monument historique</option>
                    <option value="Musée et galeries d’art">Musée et galeries d’art</option>
            
                </select>
                <select className='type selectcase' 
                value={type}
                onChange={(e)=> setSearch(e.target.value)}
                >
                    <option value=""  selected>Selectionner la région </option>
                    <option value="Region Nord">Region Nord</option>
                    <option value="Region Sud">Region Sud </option>
                    <option value="Region Est">Region Est</option>
                
            
                </select>
                
                <button className='searchbutton'>Search</button>

            </div>
            
        </form>
        

     );
}
 
export default SearchBar;