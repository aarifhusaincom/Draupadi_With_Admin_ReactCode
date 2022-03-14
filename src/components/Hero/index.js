import React from 'react';
/*import NavBar from '../NavBar';*/
import {HeroContainerImg,ContainerDiv,LogoImg, WhatsappLogo, Imgdiv, Img} from './mainElements';
import imagebg from '../../images/grou.png';
import {ReactComponent as Logo} from '../../images/Draupadi_circle.svg';
import {ReactComponent as Logo1} from '../../images/circl_d.svg';
import imgg from "../../images/circl_d.svg";
import {whats} from "./Icons"; 
import { useMediaQuery } from 'react-responsive'
import "./animation.css";


const Hero = () =>{
  const isTabletOrMobile = useMediaQuery({ maxWidth: 500 })
    return(
      <>
      <ContainerDiv id='div' className='divc'>
       <a href='https://wa.me/+916396173148' target="_blank"><WhatsappLogo>{whats}</WhatsappLogo></a>
      {/* <Imgdiv> */}
       {/* <LogoImg className='logo'>
      { isTabletOrMobile ? (<Logo1/>):(<Logo id='logo'/>)}
      </LogoImg>  */}
      {/* <Img></Img> */}
      {/* </Imgdiv> */}
      <div className="dropdiv">
      <div className='drop-container'>
      <div className='drop'> </div>
      </div>
      </div>
      </ContainerDiv>
      </>
    );
}
export default Hero;