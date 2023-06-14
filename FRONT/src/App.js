import React from 'react';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import './App.css';
import PayementReussi from './Composants/PayementReussi/PayementReussi';
import PagePayement from './Composants/PagePayement/pagePayement';
import AdminStatic from './Composants/AdminStatistic/AdminStatic';
import AppAdmin from './Composants/Admin/AppAdmin';
import AjouterLieu from './Composants/AjouterLieu/AjouterLieu';
import FormulaireModifications from './Composants/AdminGestion/GestionInformations/Formulaires/FormulaireModifications';
import FormulaireUrgences from './Composants/AdminGestion/GestionInformations/Formulaires/FormulaireUrgences';
import FormulaireTransports from './Composants/AdminGestion/GestionInformations/Formulaires/FormulaireTransports';
import FormulaireHoraire from './Composants/AdminGestion/GestionInformations/Formulaires/FormulaireHoraire';
import FormulaireDescription from './Composants/AdminGestion/GestionInformations/Formulaires/FormulaireDescription';
import Formulaire from './Composants/AdminGestion/GestionInformations/Formulaires/Formulaire';
import Informations from './Composants/AdminGestion/GestionInformations/Informations';
import FormulaireAjouterEvenement from './Composants/AdminGestion/GestionEvenements/FormulaireAjouterEvenement';
function App() {
  return(
  
 
 <>

 {/*
 <Router> 
 <Routes>
 <Route index element={<AppAdmin></AppAdmin>}/>
 <Route path="Formulaire"  element={<Formulaire/>}/>
 </Routes>
 </Router> 
  */}
  <FormulaireAjouterEvenement></FormulaireAjouterEvenement>
 </> 

  )
 
}

export default App;
