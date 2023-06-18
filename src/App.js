import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/index";
import SigninPage from "./Pages/SignIn/Signin";
import SigninPageUser from "./Pages/SignIn/SignInUser/SigninPageUser";
import Page from "./Pages/Rechercheetfiltre/AfficherLieux";
import DetailAI from "./Pages/DetailAI/detailAI";
import PrivateRoutes from "./Pages/PrivateRoutes/PrivateRouts";
import SigninPageAdmin from "./Pages/SignIn/SignInAdmin/SigninPageAdmin";
import SigninPageResponsable from "./Pages/SignIn/SignInResponsable/SigninPageResponsable";
import PageAdmin from "./Pages/SignIn/SignInAdmin/Admin";
import PageResponsable from "./Pages/SignIn/SignInResponsable/Responsable";


function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>   
        <Route path="/Signin/SigninUser/Main/AfficherLieux" element={<Page />} />
        <Route path="/Signin/SigninUser/Main/recherche" element={<Page />} />
        <Route
          path="/Signin/SigninUser/Main/detailAI/:id"
          element={<DetailAI />}
        />

      </Route>


//===============================================================
      <Route path="/Signin" element={<SigninPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/Signin/Signinuser" element={<SigninPageUser />} />
      <Route path="/Signin/SigninAdmin" element={<SigninPageAdmin />} />
      <Route path="/Signin/SigninResponsable" element={<SigninPageResponsable/>} />
      <Route path="/PageResponsable" element={<PageResponsable />} />
      <Route path="/PageAdmin" element={<PageAdmin />} />




    </Routes>
    
  );
}

export default App;
