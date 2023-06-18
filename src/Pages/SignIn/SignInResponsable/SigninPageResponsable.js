import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import "./stylelogin.css";
import SideBar from "../../../Components/SideBar2";
import NavBar from "../../../Components/NavBar2";

const SigninPageResponsable = () => {

  let navigate = useNavigate();
  let existe = true
  const [adresse, setAdresse] = useState("")
  const [numerpTlf, setNumerpTlf] = useState("")
  const [listPlace, setListPlace] = useState([]);
  const params = {
    q: '',
    format: 'json',
    addressdetails: 'addressdetails',
  }
  const handleSubmit = async (userObject) => {

    navigate("/PageResponsable", { replace: false });

  };

  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token" + response.credential);
    localStorage.setItem("token", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject.family_name);
    handleSubmit(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    existe = false;
    document.getElementById("section_remplir_info").style.display = "none"

  }



  useEffect(() => {

    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "328125616806-j0t2v9egic3d5i1mm820v5kapn6qe00d.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // si on a pas de user :sign in button
  // si on a un user : afficher log out button
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <div style={{ height: "80px" }}></div>
      <section className="section-login">
        <div className="S container-1-login">
          <h1 className="login-message">Bienvenue dans la page du login</h1>

          <div>
            <p id="messg-selction-account">veuillez selection votre compte google </p>
            <div id="signInDiv">
            </div>
          </div>

          {user && (
            <div>
              <img src={user.picture} alt="" />
              <h3> {user.name}</h3>
            </div>
          )}


        </div>
        <div className="container-2-login">
          <img className="imag-login-hide" src="https://unsplash.com/fr/photos/5ORs0Xefplo" alt="image d'une maison" />
        </div>
      </section>
    </div>
  );
};

export default SigninPageResponsable;
