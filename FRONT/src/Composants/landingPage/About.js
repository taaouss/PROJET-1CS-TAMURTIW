import React from "react";

function About(props) {
    return(
        <section id='section1'>
        <div id='about'>
            <div className='about-image'>
                    <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p> Tamurt-iw est une ressource précieuse pour les voyageurs souhaitant découvrir les merveilles de ce pays magnifique.
Que vous souhaitiez explorer les vastes étendues du Sahara, 
vous perdre dans les ruelles étroites et animées des villes historiques, 
ou gravir les majestueuses montagnes de l'Atlas, cette application vous accompagnera tout au long de votre périple.</p>
                <p>Que vous soyez un aventurier en quête de nouvelles expériences ou un amateur d'histoire et de culture, 
                    cette application vous aidera à vivre une expérience inoubliable en Algérie, en vous offrant une mine d'informations et de
                     conseils pratiques pour rendre votre voyage aussi agréable et enrichissant que possible.</p>
                <p> N'attendez pas et inscrivez-vous !</p>
                <button>{props.button}</button>

            </div>
        </div>
        </section>
    )
} 
export default About;