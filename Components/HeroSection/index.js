import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import { HeroContainer , HeroBg, VideoBg ,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const[hover,setHover] = useState(false)
    const onHover = ()=>{
        setHover(!hover)

    }
  return (

        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
            </HeroBg>
            <HeroContent>
        <HeroH1> EXPLOREZ LA BEAUTE NATURELLE EN ALGERIE </HeroH1>
        <HeroP>L’Algérie, un pays incontournable avec d’innombrables lieux touristiques.</HeroP>
                <HeroBtnWrapper>
                    <Button id='get_started_bt_test'
                      to='/Signin/SigninUser/Main/recherche'
                      // onClick={()=>{navigate("/Signin/SigninUser/Main/lyes", { replace: false });}}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                      Get Started {hover ? <ArrowForward /> :<ArrowRight />}
                     </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    );
};

export default HeroSection;