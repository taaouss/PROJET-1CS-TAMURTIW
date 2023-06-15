import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styleDetailAI.css";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";
import SideBar from "../Components/SideBar2";
import NavBar from "../Components/NavBar2";
import Footer from "../Components/Footer/Footer";
import icon1 from "./Marker Sun.png";
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
  if (num > 3.5) {
    return (
      <p>Cette note a été faite en considérant les retours des visiteurs de ce lieu. C'est un lieu recommandé.</p>
    );
  } else {
    return (
      <p>Cette note a été faite en considérant les retours des visiteurs de ce lieu. Ce n'est pas un lieu recommandé.</p>
    );
  }};
{/*==============================================   recuperation FEEDBACK a droite  =========================================================================================*/ }

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'icon2',
    rating: 4,
    title: 'Great Experience',
    date: 'June 1, 2023',
    description: 'Wassim and Nour were exceptional hosts and gave an an amazing tour of Algiers! They were extremelyknowledgable, pleasant, and helpful and flexible in making sure we got the best out of the day Wecouldn’t recommend their tour enough.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'photo2.jpg',
    rating: 5,
    title: 'Highly Recommended',
    date: 'May 25, 2023',
    description: 'Wassim is a fantastic guide. He really knows the inner workings of the city. I saw many wonderful thingsand visited many beautiful places thanks to Wassim.I highly recommend this tour as it will leave youamazed.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    photo: 'photo3.jpg',
    rating: 3,
    title: 'Average Experience',
    date: 'April 15, 2023',
    description: 'Vestibulum eget neque quis nunc cursus fermentum.',
  },
];

const renderReviews = () => {
  return reviews.map((review) => (
    <div key={review.id} className="review">
      <div className="review-info">
        <img src={review.photo} alt="User" className="user-photo" />
        <p>{review.name}</p>
      </div>
      <div className="rating-droite">
        <p className="event-review" > {review.rating}.0</p>
        {renderCircles( review.rating )}
      </div>
      <h3>{review.title}</h3>
      <p>{review.date}</p>
      <p>{review.description}</p>
      <p className="msg">Ce commentaire est l'opinion subjective d'un membre de TAMURT-IW et non de TAMURT-IW LLC.
         TAMURT-IW effectue des vérifications sur les commentaires.</p>
    </div>
  ));
};

{/*==============================================   recuperation FEEDBACK a droite  =========================================================================================*/ }



// la page pour l'affichage des details de l'annonces
const Detailai = () => {
  const { id } = useParams();
  const [announcedetail, SetAnouncesdetail] = useState(null);
  const [aiispending, setAiispending] = useState(true);
  const [error, setError] = useState(null);
  const [mapAffiche, setMapAffiche] = useState(false);
  const [cptimg, setCptimg] = useState(0);
  const [infouser, setInfouser] = useState(null);
  


  // utlisation de useeffect permet de obtenir les details de l'annonces de la base de donné des le chargement de la page
  useEffect(() => {

    // parmet d'avoir les details de l'annonces
    async function fetchData() {
      const res = await axios.get("http://127.0.0.1:5000/infoAI/" + id);
      console.log(res.data.announces[0]);
      SetAnouncesdetail(res.data.announces[0]);
      let nom = res.data.nom;
      let prenom = res.data.prenom;
      let adresse = res.data.adresse;
      let info = { nom, prenom, adresse };
      setInfouser(info);
      setAiispending(false);
      setError(null); 
    }
    fetchData();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);

    
  };

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
                {!mapAffiche && announcedetail && (
                  <img
                    src={announcedetail.images[cptimg]}
                    height="100%"
                    width="100%"
                    style={{ backgroundColor: "#f3f2f2" }}
                  />
                )}
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
                {!mapAffiche && (
                  <button
                    className="bt-precedent-img"
                    onClick={() => {
                      setCptimg(
                        (cptimg - 1 + announcedetail.images.length) %
                          announcedetail.images.length
                      );
                    }}
                  >
                    &#8249;
                  </button>
                )}
                {!mapAffiche && (
                  <button
                    className="bt-suivant-img"
                    onClick={() => {
                      setCptimg((cptimg + 1) % announcedetail.images.length);
                    }}
                  >
                    &#8250;
                  </button>
                )}
              </div>




              {/* div pour afficher les 3 truc (photo -video- map) */}
              <div className="div4-trucs">
                <div
                  className="div4truc-div div1imgs"
                  onClick={() => {
                    setMapAffiche(false);
                  }}
                >
                  <img
                    src={announcedetail.images[0]}
                    height="100%"
                    width="100%"
                  />
                  <p className="text-div">Photos</p>
                </div>
                <div className="div4truc-div div1video">
                  <p className="text-div">Video</p>
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
                      >{/*BDD*/}</Marker>
                    </Map>
                  )}
                </div>
              </div>
            </div>
            </div>
          {/*recuperer l'adresse du lieu */}
          <h3 className="Titre-lieu">Adresse Du lieu touristique {/*BACK*/} </h3>

{/*==============================================  Description  =========================================================================================*/}
          {/*recuperer la description du lieu de La BDD {announcedetail.description}*/}
          <div class="container">
          <div className="Description left">
          <h3 className="Desc-titre">Description:</h3>
          <div className="Description-text">
              <p> {/*BACK*/}
                 &nbsp; La Casbah est une commune algérienne de la wilaya d'Alger.
                Casbah est une commune algérienne de la wilaya d'Alger. Elle doit son nom à la Casbah d'Alger qui
                 est parmi les quartiers historiques d’Alger notamment avec Belcourt comprenant aujourd’hui la
                  vieille ville inscrite au patrimoine mondial de l'Unesco.
                Property amenities include fitness center, pool and jacuzzi. 
                an Diego Bay. Walk to Seapoint Village, restaurants, and nightlife! 
                Close to East Village, Little Italy, airport and much more.</p>
          </div>
          </div>


{/*=========================================================== card 1 ==============================================================================*/}
            <div className="right">
              <div className="card">
                <h3 className="Option">Adresse Du lieu touristique {/*BACK*/} </h3>
                <span className="event-name">Wilaya, Ville {/*BACK*/}</span>
                <h3 className="Option-prix">850 DA {/*BACK*/} </h3>
                <div className="icons">
                  <div className="icon">
                    <img src={icon1} alt="Icon 1" />
                    <p className="icon-description">24°C {/*BACK*/}</p>
                  </div>
                  <div className="icon">
                    <img src={icon2} alt="Icon 2" />
                    <p className="icon-description">22% {/*BACK*/}</p>
                  </div>
                  <div className="icon">
                    <img src={icon3} alt="Icon 3" />
                    <p className="icon-description">200M {/*BACK*/}</p>
                  </div>
                </div>
                <button className="large-button">Acheter un Ticket</button>
              </div>
            </div>
          </div>
{/*==============================================  Description  =========================================================================================*/}

{/*==============================================  Liste Des Evenement   =========================================================================================*/}
          {/*recuperer les details du lieu de La BDD*/}
          {/*recuperer la liste des evenement du lieu de La BDD*/}
          <div>
            <p className="Events-titre">Liste des Événements :</p>
            <div className="Events-Details">
              <ul>
                <li className="Li-Classe">
                  <div className="event-details">
                    <span className="bullet"></span>
                    <span className="event-name">Festival du Rai de la Casbah : {/*BACK*/}</span>
                    <p className="p-li">15 juin 2023 {/*BACK*/}</p>
                  </div>
                </li>
                <li className="Li-Classe">
                  <div className="event-details">
                    <span className="bullet"></span>
                    <span className="event-name">Festival de la Casbah : {/*BACK*/}</span>
                    <p className="p-li">11 septembre 2023 {/*BACK*/}</p>
                  </div>
                </li>
                <li className="Li-Classe">
                  <div className="event-details">
                    <span className="bullet"></span>
                    <span className="event-name"> Journées du Patrimoine de la Casbah : {/*BACK*/}</span>
                    <p className="p-li">22 avril 2023 {/*BACK*/}</p>
                  </div>
                </li>
                <li className="Li-Classe">
                  <div className="event-details">
                    <span className="bullet"></span>
                    <span className="event-name">Semaine du Cinéma de la Casbah : {/*BACK*/}</span>
                    <p className="p-li">22 juillet 2023 {/*BACK*/}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
{/*==============================================  Liste Des Evenement   =========================================================================================*/}

{/*==============================================  la liste des Itinéraires et Transports  =========================================================================================*/}
          {/*recuperer la liste des Itinéraires et Transports du lieu de La BDD*/}

          <div class="container">
            <div className="left">
        <div>
            <p className="Transports-Titre">Itinéraires et Transports :</p>


            {/*recuperer la liste des Itinéraires et Transports du lieu de La BDD OPTION -1-*/}
            <div className="Events-Details">
              <p className="Option">Option 1:</p>
              <ul>
                <li className="Li-Classe">
                  <div className="event-details">
                    <span className="bullet"></span>
                    <span className="event-name"> Durée estimée du trajet :</span>
                    <p className="p-li">50 minutes/heures {/*BACK*/}</p>
                  </div>
                </li>
                <li className="Li-Classe">
                  <div className="event-details">
                    <span className="bullet"></span>
                    <span className="event-name"> Modes de transport :</span>
                    <p className="p-li">Transport en commun (bus ligne 1) {/*BACK*/}</p>
                  </div>
                </li>
                <li className="Li-Classe">
                  <div className="event-details">
                    <span className="bullet"></span>
                    <span className="event-name"> Depart :</span>
                    <p className="p-li">Gare routière 1er Mai {/*BACK*/}</p>
                  </div>
                </li>
            </ul>



              {/*recuperer la liste des Itinéraires et Transports du lieu de La BDD OPTION -2- ECORESPONSABLES*/}
                  <div className="option-container">
                  <p className="Option">Option 2 : </p>
                  <img src={ecores} alt="ecores" className="ecores-photo" />
                  <button className="button-ecores">Ecoressponsable</button>
                  </div>

                <ul>
                  <li className="Li-Classe">
                    <div className="event-details">
                      <span className="bullet"></span>
                      <span className="event-name"> Durée estimée du trajet :</span>
                      <p className="p-li">50 minutes/heures {/*BACK*/}</p>
                    </div>
                  </li>
                  <li className="Li-Classe">
                    <div className="event-details">
                      <span className="bullet"></span>
                      <span className="event-name"> Modes de transport :</span>
                      <p className="p-li">Transport en commun (bus ligne 1) {/*BACK*/}</p>
                    </div>
                  </li>
                  <li className="Li-Classe">
                    <div className="event-details">
                      <span className="bullet"></span>
                      <span className="event-name"> Depart :</span>
                      <p className="p-li">Gare routière 1er Mai {/*BACK*/}</p>
                    </div>
                  </li>
                </ul>
          </div>
          </div>
            </div>

{/*=========================================================== card 2 ==============================================================================*/}

          <div className="right">
            <div className="c2-card">
              <button className="button-card2">Horaires</button>
              <div></div>
                <span className="event-name"> Ouverture:</span>
                <p className="p-li">10:00am {/*BACK*/}</p>
                <div></div>
                <span className="event-name"> Fermeture:</span>
                <p className="p-li">19:00pm {/*BACK*/}</p>
            </div>
          </div>
          </div>

{/*==============================================  la liste des Itinéraires et Transports  =========================================================================================*/}

{/*==============================================  Help  =========================================================================================*/}

          {/*recuperer l'Aide' du lieu de La BDD*/}
          <div >
          <p className="Events-titre">Aide :</p>
            <div className="Description-text Help-div">
              <p>
              {/*BACK*/}
               &nbsp; If you have questions about this tour or need any help,
              we’d be happy to answer. Just call the number  : +33 855 275 5071
              For emergency call : +33 225 275 5071
              </p>  
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
