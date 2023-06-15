import React from 'react';
import fb from '../Image/fb.png'
import insta from '../Image/insta.png'
import twitter from '../Image/twitter.png'
import link from '../Image/link.png'


const Footer = () => {
  return (
    
   <div className='footer'>
    <div className='sb__footer section__padding'>
      <div className='sb__footer-links'>

      <div className='sb__footer-links_div'>
        <h4>Contact</h4>
        <p>Oued Smar, Alger, Algerie</p>
        <p>+213 45 54 43 55</p>
        <p>dws@gmail.com</p>
        <p>www.DWS.com</p>
        </div> 

       <div className='sb__footer-links_div'>
        <h4>Support</h4>
        <p>FAQ's</p>
        <p>Nous contacter</p>
        <p>Conditions et termes</p>
        <p>Connectivite</p>
        </div> 

      

        <div className='sb__footer-links_div'>
        <h4>A propos</h4>
        <p>Explore</p>
        <p>Enjoy</p>
        <p>Experience</p>
        <p>Visit</p>
        </div> 

        <div className='sb__footer-links_div'>
        <h4>Media</h4>
        <div className='socialmedia'>
        <p><img src={fb}alt=''/></p>
        <p><img src={insta}alt=''/></p>
        <p><img src={twitter}alt=''/></p>
        <p><img src={link}alt=''/></p>
        </div>
        </div> 
        
      </div>
    </div>
     
   </div>
   
  );
};

export default Footer;