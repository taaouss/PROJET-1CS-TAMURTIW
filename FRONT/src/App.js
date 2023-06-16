import React from 'react';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './Composants/landingPage/LandingPage';
import PayementReussi from './Composants/PayementReussi/PayementReussi';
import PagePayement from './Composants/PagePayement/pagePayement';
import AdminStatic from './Composants/ResponsableCentral/Static';
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
import Review from './Composants/Feedback/Review';
import LieuCard from './Composants/GestionLieux/LieuCard';
import ListeLieux from './Composants/GestionLieux/ListeLieux';
import LieuRespo from './Composants/ResponsableCentral/LieuRespo';
import AppRespo from './Composants/ResponsableCentral/AppRespo';

function App() {
  return(

 <>
 <Router> 
 <Routes>
 <Route index element={<AppRespo></AppRespo>}/>
 <Route path="Formulaire"  element={<Formulaire/>}/>
 <Route path="MiseAjourEvenements"  element={  <FormulaireAjouterEvenement/>}/>
 <Route path="Lieu"  element={<LieuRespo></LieuRespo>}/>
 <Route path="AjouterLieu"  element={<AjouterLieu></AjouterLieu>}/>
 </Routes>
 </Router> 
 </> 

  )
}

export default App;
