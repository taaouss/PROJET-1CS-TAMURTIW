import React from 'react'
import './PayementReussi.css'
function PayementReussi() {
    return (
        <div>
          <div className='bar'/>
          <div className='divCentre-1'>
            <div className='divCentre-2'>
              <button className='BTN-termine'>Votre transaction a été traitée avec succès</button>
              <h3>Nous vous remercions d'avoir effectué votre achat de billet sur notre site web.</h3>
              <p>Nous avons le plaisir de vous informer que votre billet électronique a été 
                envoyé à votre adresse e-mail enregistrée. Veuillez vérifier votre boîte de 
                réception pour le retrouver.</p>
            </div>
          </div>
        </div>
          );
}

export default PayementReussi