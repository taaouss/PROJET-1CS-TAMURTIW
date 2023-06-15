
import AdminStatic from './Static';
import {React,useState} from 'react'
import '../AdminStatistic/AdminStatic.css'
import AdminGestion from '../AdminGestion/AdminGestion';
import AdminCommentaire from '../AdminCommentaire/AdminCommentaire';

function LieuRespo() {
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
              {activeElement === 'Statistiques' && <div><AdminStatic></AdminStatic></div>}
              {activeElement === 'Gestion' && <div><AdminGestion></AdminGestion></div>}
              {activeElement === 'Commentaires' && <div><AdminCommentaire></AdminCommentaire></div>}
              </div>
          </div>
      </div>
  
  
      </div>
    
    )
  }

export default LieuRespo