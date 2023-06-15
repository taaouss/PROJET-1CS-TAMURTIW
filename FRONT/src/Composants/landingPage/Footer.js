import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <h3>Contactez-nous</h3>
          <p>
            Adresse : 123 Rue de l'Exemple, Ville, Pays
            <br />
            Email : contact@example.com
            <br />
            Téléphone : +123456789
          </p>
        </div>
        <div className="social-media">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;