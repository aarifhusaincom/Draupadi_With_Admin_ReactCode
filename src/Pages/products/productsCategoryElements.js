import styled from 'styled-components';
import {HeartCircle} from '@styled-icons/ionicons-outline/HeartCircle';
export const PcategoryContainer = styled.div`
display:block;
background:white;
width: 200px;
top:100px;
height:auto;
margin:10px;
padding-left:100px;
position:relative;`
export const Shortlist = styled(HeartCircle)`
height:35px;
width:35px;
color:grey;
position:relative;
top:-50px;
left:240px;`

export const Pheader = styled.h1`
color:#ff1a1a;
font-size:18px;
border-bottom-style: dashed;
border-bottom-color: #ff1a1a;
border-bottom-width: thin;
padding:10px;`

export const Headertwo = styled.h1`
color:#ff1a1a;
font-size:18px;
left:0px;
position:relative;
border-bottom-style: solid;
border-bottom-color: #ff1a1a;
margin: 0;
top:-20px;
padding:10px;`

export const Pname = styled.h2`
color: black;
font-size:20px;
padding:5px;`

export const Image = styled.img`
width:260px;
height:300px;
border-radius:5px;
border: 2px;`

export const ImageContainer = styled.div`
position:relative;
display:block;
width:300px;
top:-150px;
margin:5px;`

export const SmallImage = styled.img`
width:40px;
height:50px;
padding:11px;
border:2px;
border-radius:5px;`
export const Scrolldiv = styled.div`
position:relative;
width:265px;
border: 2px;
margin:5px;
top:-150px;`

export const Plist = styled.li`
color:grey;
border-bottom-style: dashed;
border-bottom-color:#ff1a1a;
border-bottom-width: thin;
padding: 5px;

::before { 
  content: "";
  border-color: transparent #ff1a1a;
  border-style: solid;
  border-width: 0.35em 0 0.35em 0.45em;
  display: block;
  height: 0;
  width: 0;
  left: -1e
  m;
  top: 0.9em;
  position: relative;
}`

export const Pspan = styled.span`
color:black;
font-size:25px;
position:relative;
top:30px;
left:-30px`
export const Productpara =styled.p`
color:black;
font-size:15px;
`

export const DetailsContainer = styled.div`
display:block;
top:-100px;
padding-left:50px;
position:relative;
margin:5px;
width:250px;`