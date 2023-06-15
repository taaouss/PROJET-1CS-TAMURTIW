import {React,useState} from 'react'
import AdminStatic from '../ResponsableCentral/Static';
import '../AdminStatistic/AdminStatic.css'
import AdminGestion from '../AdminGestion/AdminGestion';
import AdminCommentaire from '../AdminCommentaire/AdminCommentaire';
import RespoStatistiques from '../AdminStatistic/AdminStatistiques';
function AppAdmin() {
  const [activeElement, setActiveElement] = useState('Statistiques');

  const handleButtonClick = (element) => {
    setActiveElement(element);
  };
  return (
    
    <div>
    <div className='bar'/>
    <div className='containerA'>
        <div className='Map'></div>
        <div className='InfoContainer'>
            <div className='boutons'> 
             <button  className={`bouton ${activeElement === 'Statistiques' ? 'boutonClique' : ''}`} onClick={() => handleButtonClick('Statistiques')}  >Statistiques </button>
             <button  className={`bouton ${activeElement === 'Gestion' ? 'boutonClique' : ''}`} onClick={() => handleButtonClick('Gestion')}> Gestion</button>
             <button  className={`bouton ${activeElement === 'Commentaires' ? 'boutonClique' : ''}`} onClick={() => handleButtonClick('Commentaires')}> Commentaires </button>
            </div>
            <div className='statistics'>
            {activeElement === 'Statistiques' && <div><RespoStatistiques></RespoStatistiques></div>}
            {activeElement === 'Gestion' && <div><AdminGestion></AdminGestion></div>}
            {activeElement === 'Commentaires' && <div><AdminCommentaire></AdminCommentaire></div>}
            </div>
        </div>
    </div>


    </div>
  
  )
}

export default AppAdmin