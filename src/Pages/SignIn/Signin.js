import React from 'react'
import Video from '../../Videos/video2.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, NavBtn1, NavBtn2, NavBtn3, Container } from './SigninElements'
import Footer from '../../Components/Footer/Footer';
const Signin = () => {

   return (
      <div>
      <HeroContainer>
         <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='Video2/mp4' />
         </HeroBg>
         <HeroContent>
               <HeroH1> Vous etes un utilisateur simple, un responsable du lieu ou un administrateur ? </HeroH1>
               <HeroP> Cette page est utilisée uniquement à des fins de démonstration afin de simplifier le processus de connexion .
             </HeroP>
            <HeroBtnWrapper>
               <Container>
                  <NavBtn1>
                     <NavBtnLink to='/Signin/SigninUser'>Utilisateur  </NavBtnLink>
                  </NavBtn1>
                  <NavBtn2>
                     <NavBtnLink to='/Signin/SigninAdmin'> Administrateur    </NavBtnLink>
                  </NavBtn2>
                  <NavBtn3>
                     <NavBtnLink to='/Signin/SigninResponsable'> Responsable du lieu    </NavBtnLink>
                  </NavBtn3>
                  </Container>
            </HeroBtnWrapper>
         </HeroContent>
         
      </HeroContainer>
      <Footer />
      </div>
   );
};

export default Signin;

//=============================================================================================================================