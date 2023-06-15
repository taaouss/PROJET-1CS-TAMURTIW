import "./style.css";
import { Link as LinkR } from "react-router-dom";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import jwt_decode from "jwt-decode";



// pour afficher le contenaire de la map et les annonces dans la page de recherche
const Map_Annonce = (prop) => {
  const announces = prop.announces;
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
          {announces.map((announce) => (
            <Marker
              longitude={announce.longitude}
              latitude={announce.latitude}
            ></Marker>
          ))}
        </Map>
      </div>
 {/*====================================== affichage des lieux ===============================================================================*/}
      <div className="Containerannonce">
        
        {announces.map((announce) => (
          <LinkR
            className="annonce"
            key={announce.id}
            to={`/Signin/SigninUser/Main/detaiAI/${announce.id}`}
          >
            <div className="divimg">
              {announce.images.length !=0 && <img
                className="imgai"
                src={announce.images[0]}
                alt="AI IMAGE"
                width="100%"
              />}
              {announce.images.length ==0 && <img
                className="imgai"
                src={require("../../Images/img.png")}
                alt="AI IMAGE"
                width="100%"
              />}
            </div>

            <p className="prix">{announce.adresse}</p>
            <p className="adr">{announce.prix} DA</p>

          </LinkR>
        ))}
      </div>
      
    </dir>
  );
};

export default Map_Annonce;
