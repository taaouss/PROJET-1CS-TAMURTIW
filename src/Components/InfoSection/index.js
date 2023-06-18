import React from 'react';
import CountUp from 'react-countup';
import "./InfoSection.css";
import "./index.css";
import logo from "../../Images/value.png";
 

const InfoSection = () => {
  return (
    <>
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerwidth flexcenter hero-container" >
        
          {/*left side*/}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <h1>
                TAMURT-IW
              </h1>
            </div>

              <div className="flexColStart hero-des">
                <span className="secondaryText"> Find a variety of places that suit you very easily </span>
                <span className="secondaryText"> Forget all difficulties in finding a place for you  </span>
              </div>

              {/*============================= stats div =======*/}
              <div className="flexStart stats">
                <div className="flexColStart firststat stat">
                         <span>
                             <CountUp start={7000} end={9000} duration={20}/>
                             <span>+</span>
                         </span>
                           <span className="secondaryText">Places </span>
                       </div>
                      {/*======================================================================*/}
                <div className="flexColStart firststat  stat">
                  <span>
                    <CountUp start={2000} end={3000} duration={15} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Custumors</span>
                </div>
        {/*======================================================================*/}
                <div className="flexColStart stat">
                  <span>
                    <CountUp end={90}/>
                    <span>+</span>
                  </span>
                  <span className="secondaryText"> awards winnings</span>
                </div>
              </div>

              
          </div>

          {/*right side*/}
            <div className="flexCenter hero-right">
             <div className="image-container"> 
                <img src={logo} alt="Logo" />
             </div>
            </div>
        </div>
      </section>
    </div>
    </>
  )
};

export default InfoSection;