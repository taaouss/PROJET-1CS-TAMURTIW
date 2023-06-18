import "./style.css";
import { Link as LinkR } from "react-router-dom";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import jwt_decode from "jwt-decode";
import lie from "./lieu.png"


// pour afficher le contenaire de la map et les annonces dans la page de recherche
const Map_Annonce = (prop) => {
  const lieux = prop.lieux;
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token" + response.credential);
    localStorage.setItem("token", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject.family_name);
    document.getElementById("signInDiv").hidden = true;
    console.log(userObject.family_name);
  }
  return (

    <dir className="ContainerMap_Annonce">
      <div className="map">
        {/*====================================== affichage des lieux sur la map ===============================================================================*/}
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: 3.05176,
            latitude: 36.77172,
            zoom: 4,
          }}
          style={{ width: "100%", height: " calc(95vh - 77px)" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=ami5YZbLyI4lKlA0CpRx	"
        >
          <NavigationControl position="top-left" />
          {lieux && lieux.map((lieu) => (
  <Marker  longitude={lieu.longitude} latitude={lieu.latitude}>
    {/* Render the content of the Marker */}
  </Marker>
))}







        </Map>
      </div>
 {/*====================================== affichage des lieux ===============================================================================*/}
      <div className="Containerannonce">
        
        {lieux.map((lieu) => (
          <LinkR
            className="annonce"
            key={lieu.id}
            to={`/Signin/SigninUser/Main/detailAI/${lieu.id}`}
          >
            <div className="divimg">
              {  <img
                src={lie}
                className="imgai"
                width="100%"
                height="100%"
              />}
            </div>

            <p className="prix">{lieu.nom_lieu}</p>
            <p className="adr">{lieu.categorie} </p>

          </LinkR>
        ))}
      </div>
      
    </dir>
  );
};

export default Map_Annonce;
