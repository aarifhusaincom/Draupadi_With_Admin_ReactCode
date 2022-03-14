import styled from 'styled-components';
import {Whatsapp} from '@styled-icons/remix-fill/Whatsapp';
//import {BsWhatsapp} from "react-icons/bs";
import  Logg from '../../images/Draupadi_circle.svg'
import Logo from '../../images/whatsappIcon.svg';
import imagebg from '../../images/grou.png';
import { IoLogoWhatsapp } from "react-icons/io";
import mobback from '../../images/Gr1575.png';

export const HeroContainerImg = styled.img`
    position: absolute;
    repeat: no-repeat; 
    width:100%;
    height:auto;
    object-fit:cover;
    `
  

  export const LogoImg=styled.div`
    position:relative;  
    max-width:450px;  
    background-position: center ;
    background-repeat: no-repeat; 
    z-index:9;
    height: 425px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-item:center;
    border-radius:50%;
    border:5px red solid;
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1;
   
	  transform: translateX(-20%) translateY(-20%) rotate(-45deg);

     ` 

    export const ContainerDiv=styled.div`
     position:relative;
     background-image:url(${imagebg});
     background-position:center;
     background-repeat: no-repeat; 
     background-size: cover; 
     display:flex;
    justify-content:center;
    align-items:center; 

     @media (max-width:320px) and (min-width:180px){
      min-width: 320px;
      min-height:185px;
      // background-image:url(${mobback});
      display:block;
      // background-size: contain; 
      object-fit:cover;
      padding-bottom:5px;
     }
     @media (max-width:375px) and (min-width:321px){
      min-width: 375px;
      min-height:195px;
      // background-image:url(${mobback});
      background-size: contain; 
      object-fit:cover;
      padding-bottom:5px;
      margin:0px
     }
      @media (max-width:425px) and (min-width:376px){
      max-width: 310px;
      min-height:220px;
      // background-image:url(${mobback});
      // display:block;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:768px) and (min-width:426px){
      max-width: 768px;
      min-height:450px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:992px) and (min-width:769px){
      max-width: 992px;
      min-height:450px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:1024px) and (min-width:993px){
      max-width: 992px;
      min-height:500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:1366px) and (min-width:1025px){
      max-width: 1366px;
      min-height:640px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:1440px) and (min-width:1367px){
      max-width: 1400px;
      min-height:680px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:1920px) and (min-width:1441px){
      max-width: 1920px;
      min-height:900px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:2560px) and (min-width:1921px){
      max-width: 2560px;
      min-height:1200px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:3000px) and (min-width:2561px){
      max-width: 3000px;
      min-height:1400px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:3500px) and (min-width:3001px){
      max-width: 4000px;
      min-height:1800px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:4000px) and (min-width:3501px){
      max-width: 4000px;
      min-height:2000px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:4500px) and (min-width:4001px){
      max-width: 4500px;
      min-height:2200px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:5000px) and (min-width:4501px){
      max-width: 5000px;
      min-height:2500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:5000px) and (min-width:4501px){
      max-width: 5000px;
      min-height:2500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:5500px) and (min-width:5001px){
      max-width: 5500px;
      min-height:2500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:6000px) and (min-width:5501px){
      max-width: 5500px;
      min-height:2500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:6500px) and (min-width:6001px){
      max-width: 5500px;
      min-height:2500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:7000px) and (min-width:6501px){
      max-width: 5500px;
      min-height:2500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:7679px) and (min-width:7001px){
      max-width: 5500px;
      min-height:2500px;
      padding-bottom:5px;
      margin:0px
     }
     @media (max-width:8000px) and (min-width:7680px){
      max-width: 8000px;
      min-height:3600px;
      padding-bottom:5px;
      margin:0px
     }
     `

export const WhatsappLogo = styled.div`
display: flex;
font-size:2rem;
height:50px;
right:5%;
color:green;
top:85%;
z-index:1;
float:right;
position: fixed;
 `

 export const Imgdiv = styled.div`
 opacity:1;
 width:320px;
 height:320px;
 border-radius:50%;
 background-image:url(${Logg});
background-position:center;
background-repeat:no-repeat;
display:flex;
justify-content:center;
align-item:center;

@media (max-width:570px) and (min-width:280px){

background-image:url(${Logg});
background-position:center;
background-repeat:no-repeat;
display:flex;
justify-content:center;
align-item:center;
}
 `

 export const Img = styled.div`
//  background-Color:grey;
 opacity:.6;
 width:100%;
 height:100%;
 border-radius:50%;

background-position:center;
background-repeat:no-repeat;
background-size:cover;
margin:auto;
border:4px red dashed;
 

 @media (max-width:570px) and (min-width:230px){

}



 
 `
