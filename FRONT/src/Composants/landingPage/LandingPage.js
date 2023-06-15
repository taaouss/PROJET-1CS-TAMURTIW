import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import AboutUs from './AboutUs';
import Footer from "./Footer";

function LandingPage() {
    return(
      <div className='App'>
   <Header/>
   <section id='section2'>
    <div className="title-container">
          <h1> Nous <span className="highlight">Proposons</span> </h1>
    </div>
   <Feature/>
   </section>
   <AboutUs/>
   <Footer/>
      </div>
    )}  

export default LandingPage