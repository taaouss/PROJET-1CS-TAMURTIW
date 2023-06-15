import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import AboutUs from './AboutUs';
import Footer from "./Footer";
import Contact from "./Contact";
import './landing.css';

function LandingPage() {
    return(
  <div>
    <Header/>
    <section id='section2'>
       <div className="title-container">
          <h1> Nous <span className="highlight">Proposons</span> </h1>
       </div>
     <Feature/>
    </section>
    <AboutUs/>
    <Contact/>
    <Footer/>
  </div>
    )}  

export default LandingPage;