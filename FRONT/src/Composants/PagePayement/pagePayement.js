import React from "react";
import './pagePayement.css'
function PagePayement(){
    return (
        <div className="containerPP">
         <div className='infoOperateur'>
          <div className='infoOP1'></div>
          <div className='infoOP2'>
            <p >Commerçant: TAMURT-IW</p>
            <p> site web: www.tamurt-iw.dz</p>
            <p> Montant : 00 DA</p>
          </div>
         </div>
         <div className='infoClient'>
         <div className='infoCL1'>
          <p>Informations client</p>
          </div>
          <div className='infoCL2'>
              <form className='formulaire'>
                <div className='form-col'>
              <div className="form-group">
                <label>Numéro de votre carte CIB *</label>
                <input type="text" name="name" />
              </div>
              <div className="form-group">
                <label>CVV2 *</label>
                <input className='user-input' />
              </div>
              <div className="form-group1">
               <label>Date d'éxpiration *</label>
               <input className='user-input'   placeholder="12- Decemebre" />
               <input className='user-input'  placeholder="2019"  />
               </div>
               <div className="form-group">
               <label>Nom Prénom *</label>
               <input className='user-input'/>
               </div>
               <div className='buttons'>
               <button type="submit" className='submitBTNAI'>valider</button>
               <button type="submit" className='submitBTNAI'>Réinitialiser</button>
               <button type="submit" className='submitBTNAI'> Annuler</button>
               </div>
               </div>
               </form> 
           </div>
          <div className='infoCL3'>
          </div>
         </div>
          </div>
      );
}

export default PagePayement ;