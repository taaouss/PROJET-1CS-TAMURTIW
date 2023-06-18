import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styleDetailAI.css";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";
import SideBar from "../../Components/SideBar2";
import NavBar from "../../Components/NavBar2";
import Footer from "../../Components/Footer/Footer";
import icon1 from "./Marker Sun.png";
import user from "./user.png";
import icon2 from "./Rain.png";
import icon3 from "./Vector.png";
import ecores from "./voiture-electrique 1.png";







{/*==============================================   recuperation FEEDBACK a gauche  =========================================================================================*/ }
 // Numéro à afficher recuperer de la BDD
const renderCircles = (num) => {
  const maxCircles = 5; // Nombre maximum de cercles
  const circles = [];

  for (let i = 1; i <= maxCircles; i++) {
    const className = i <= num ? 'filled-circle' : 'empty-circle';
    circles.push(<div key={i} className={className}></div>);
  }

  return circles;};
const renderRatingText = (num) => {
  if (num < 3.5) {
    return (
      <p>Cette note a été faite en considérant les retours des visiteurs de ce lieu. C'est un lieu recommandé.</p>
    );
  } else {
    return (
      <p>Cette note a été faite en considérant les retours des visiteurs de ce lieu. Ce n'est pas un lieu recommandé.</p>
    );
  }};

{/*==============================================   recuperation FEEDBACK a droite  =========================================================================================*/ }



// la page pour l'affichage des details de l'annonces
const Detailai = () => {
  const { id } = useParams();
  const [announcedetail, SetAnouncesdetail] = useState(null);
  const [appreciation, SetAppreciation] = useState(null);
  const [aiispending, setAiispending] = useState(true);
  const [error, setError] = useState(null);
  const [mapAffiche, setMapAffiche] = useState(true);
  const [cptimg, setCptimg] = useState(0);
  const [infouser, setInfouser] = useState(null);
  

  const reviews = appreciation;
  
  const renderReviews = () => {
    return reviews.map((review) => (
      <div>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <div className="review-info">
            <img src={user} alt="User" className="user-photo" />
            <p>{review.Client.nom} {review.Client.prenom}</p>
          </div>
          <div className="rating-droite">
            <p className="event-review">{review.note}.0</p>
            {renderCircles(review.note)}
          </div>
          <p>{review.commentaire}</p>
          <p className="msg">
            Ce commentaire est l'opinion subjective d'un membre de TAMURT-IW et non de TAMURT-IW LLC. TAMURT-IW effectue des vérifications sur les commentaires.
          </p>
        </div>
      ))}
    </div>
    ));
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // utlisation de useeffect permet de obtenir les details de l'annonces de la base de donné des le chargement de la page
  useEffect(() => {

    // parmet d'avoir les details de l'annonces
    async function fetchData() {
      const res = await axios.get("http://127.0.0.1:5000/infoAI/" + id);
      console.log(res.data.lieux);
      SetAnouncesdetail(res.data.lieux);

      SetAppreciation(res.data.appreciations);
      let nom = res.data.nom;
      let prenom = res.data.prenom;
      let adresse = res.data.adresse;
      let info = { nom, prenom, adresse };
      setInfouser(info);
      setAiispending(false);
      setError(null); 
    }
    fetchData();
  },[]);


  return (
    <div>
      {/* Nav bar  */}
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <div style={{ height: "100px" }}></div>
      {aiispending && <div>Loading ...</div>}

      {announcedetail && (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >



          {/* div pour afficher les photo et la map */}
          <div className="div-1-detailAI">



            {/* div de la photo principale ou map selon le booleen */}
            <div className="div-img-4trucs-map">
              <div className="div-aff-img-map">
                
                {mapAffiche && announcedetail && (
                  <Map
                    mapLib={maplibregl}
                    initialViewState={{
                      longitude: announcedetail.longitude,
                      latitude: announcedetail.latitude,
                      zoom: 7,
                    }}
                    mapStyle="https://api.maptiler.com/maps/streets/style.json?key=ami5YZbLyI4lKlA0CpRx	"
                  >
                    <NavigationControl position="top-left" />

                    <Marker
                      longitude={announcedetail.longitude}
                      latitude={announcedetail.latitude}
                    ></Marker>
                  </Map>
                )}
               
                
              </div>




              {/* div pour afficher les 3 truc (photo -video- map) */}
              <div className="div4-trucs">
                <div
                  className="div4truc-div div1imgs"
                  onClick={() => {
                    setMapAffiche(true);
                  }}
                >
                  
                </div>
                <div className="div4truc-div div1video">
                </div>
                <div
                  className="div4truc-div div1map"
                  onClick={() => {
                    setMapAffiche(true);
                  }}
                >
                  <p className="text-div">Map</p>
                  {announcedetail && (
                    <Map
                      className="map-di"
                      mapLib={maplibregl}
                      initialViewState={{
                        longitude: announcedetail.longitude,
                        latitude: announcedetail.latitude,
                        zoom: 3,
                      }}
                      style={{ cursor: "pointer", height: "220px" }}
                      cursor={"pointer"}
                      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=ami5YZbLyI4lKlA0CpRx	"
                    >
                      <Marker
                        longitude={announcedetail.longitude}
                        latitude={announcedetail.latitude}
                      ></Marker>
                    </Map>
                  )}
                </div>
              </div>
            </div>
            </div>
          {/*recuperer l'adresse du lieu */}
          <h3 className="Titre-lieu"> {announcedetail.nom_lieu} </h3>

{/*==============================================  Description  =========================================================================================*/}
          {/*recuperer la description du lieu de La BDD {announcedetail.description}*/}
          <div class="container">
          <div className="Description left">
          <h3 className="Desc-titre">Description:</h3>
          <div className="Description-text">
              <p> {announcedetail.description_lieu}
              </p>
          </div>
          </div>


{/*=========================================================== card 1 ==============================================================================*/}
            {/*=========================================================== Horaire ==============================================================================*/}

<div className="right">
            <div className="c2-card">
              <button className="button-card2">Horaires</button>
              <div></div>
              <span className="event-name"> Jours d'ouverture :</span>
                <p className="p-li">jsp{/*BACK*/}</p>
                <div></div>
                <span className="event-name"> Ouverture:</span>
                <p className="p-li">10:00am {/*BACK*/}</p>
                <div></div>
                <span className="event-name"> Fermeture:</span>
                <p className="p-li">19:00pm {/*BACK*/}</p>
            </div>
 </div>
          
          </div>
{/*==============================================  Description  =========================================================================================*/}

{/*==============================================  Liste Des Evenement   =========================================================================================*/}
          {/*recuperer les details du lieu de La BDD*/}
          {/*recuperer la liste des evenement du lieu de La BDD*/}
          <div className="container">
          <div>
  <p className="Events-titre">Liste des Événements :</p>
  <div className="Events-Details">
    <ul>
      {announcedetail.evenements.map((evenement) => (
        <li className="Li-Classe" key={evenement.id}>
          <div className="event-details">
            <span className="bullet"></span>
            <span className="event-name">Nom de l'événement:</span>
            <p className="p-li">{evenement.nom_activite}</p>
          </div>
          <div className="event-details">
            <span className="bullet"></span>
            <p className="p-li">{evenement.description_evenement}</p>
          </div>
          <div className="event-details">
            <span className="bullet"></span>
            <span className="event-name">Date début:</span>
            <p className="p-li">{evenement.date_debut}</p>
          </div>
          <div className="event-details">
            <span className="bullet"></span>
            <span className="event-name">Payement:</span>
            <p className="p-li">{evenement.gratuite}</p>
            {!evenement.gratuite ? (
              <button className="large-button">Acheter un Ticket</button>
            ) : (
              <p>Cet événement est gratuit</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
</div>
{/*==============================================  Liste Des Evenement   =========================================================================================*/}

{/*==============================================  la liste des Itinéraires et Transports  =========================================================================================*/}
<div className="container">
  <div className="left">
    <div>
      <p className="Transports-Titre">Itinéraires et Transports :</p>

      {/* Option 1: Display Transports */}
      <div className="Events-Details">
  <ul>
    {announcedetail.transports.map((transport) => (
      <li className="Li-Classe" key={transport.id}>
         <div className="event-details">
          <span className="bullet"></span>
          <span className="event-name">Modes de transport:</span>
          <p className="p-li">{transport.type_transport}</p>
        </div>
        <div className="event-details">
          <span className="bullet"></span>
          <span className="event-name">Durée estimée du trajet:</span>
          <p className="p-li">{transport.duree}</p>
        </div>
       
        <div className="event-details">
          <span className="bullet"></span>
          <span className="event-name">Depart:</span>
          <p className="p-li">{transport.lieu_depart}</p>
<div></div>
        </div>
      </li>
    ))}
  </ul>
</div>

      {/* Option 2: Display Eco-responsible Transports */}
      <div>
  <div className="option-container">
    <img src={ecores} alt="ecores" className="ecores-photo" />
    <button className="button-ecores">Ecoressponsable</button>
    <ul>
      {announcedetail.transports
        .filter((transport) => transport.is_ecoresponsable)
        .map((transport) => (
          <li className="Li-Classe" key={transport.id}>
            <div className="event-details">
              <span className="bullet"></span>
              <span className="event-name">Durée estimée du trajet:</span>
              <p className="p-li">{transport.duree}</p>
            </div>
            <div className="event-details">
              <span className="bullet"></span>
              <span className="event-name">Modes de transport:</span>
              <p className="p-li">{transport.type_transport}</p>
            </div>
            <div className="event-details">
              <span className="bullet"></span>
              <span className="event-name">Depart:</span>
              <p className="p-li">{transport.lieu_depart}</p>
            </div>
          </li>
        ))}
    </ul>
  </div>
</div>

    </div>
  </div>

{/*=========================================================== Horaire ==============================================================================*/}


          
</div>
{/*==============================================  Help  =========================================================================================*/}

          {/*recuperer l'Aide' du lieu de La BDD*/}
          <div >
          <p className="Events-titre">Aide :</p>
            <div className="Description-text Help-div">
            <div>
            <p className="Transports-Titre">Services d'urgences  :</p>
  <div className="Serviceurgence-Details">
    <ul>
      {announcedetail.service_urgences.map((urgence) => (
        <li className="Li-Classe" key={urgence.id}>
          <div className="urgence-details">
            <span className="bullet"></span>
            <span className="urgence-name">Type de service:</span>
            <p className="p-li">{urgence.type_service}</p>
          </div>
          <div className="urgence-details">
            <span className="bullet"></span>
            <span className="urgence-name">Numéro de téléphone:</span>
            <p className="p-li">{urgence.contact}</p>
          </div>
          
        </li>
      ))}
    </ul>
  </div>
</div>







          </div>
          </div>
{/*==============================================  Help  =========================================================================================*/}
{/*==============================================  FEEDBACK =========================================================================================*/}
          <div className="feed-back-container">
            <div className="rightDiv">
              <h3 className="FEED-titre">FEED-BACK:</h3>
              <button className="button-feedback">Write a review</button>
              <p className="Reviews-t">Reviews</p>
              <div className="line"></div>
              <div className="rating">
                <p className="event-name" > {4}.0</p>
                <div className="circles-container">
                  {renderCircles(4)}
                </div>
              </div>
              <p className="Feedback-desc">{renderRatingText()}</p>
            </div>
            <div className="leftDiv">
              <div className="reviews-container">
                {renderReviews()}
              </div>
            </div>
          </div>
{/*==============================================  FEEDBACK =========================================================================================*/}




        </section>
      )}
      <Footer />
    </div>
  );
};

export default Detailai;
