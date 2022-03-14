import styled from 'styled-components';
import {HeartCircle} from '@styled-icons/ionicons-outline/HeartCircle';
export const PcategoryContainer = styled.div`
display:block;
background:white;
min-width: 300px;
position:relative;
margin:10px;`
export const Shortlist = styled(HeartCircle)`
height:35px;
width:35px;
color:grey;
position:relative;
top:-50px;
left:240px;`

export const Pheader = styled.h1`
color:#BA7D82;
font-size:18px;
border-bottom-style: dashed;
border-bottom-color: #BA7D82;
border-bottom-width: thin;
padding:10px;`

export const Headertwo = styled.h1`
color:#ff751a;
font-size:18px;
position:relative;
border-bottom-style: solid;
border-bottom-color: #BA7D82;
margin: 0;
padding:10px;`

export const Pname = styled.h2`
color: black;
font-size:20px;
padding:5px;`

export const Image = styled.img`
max-width:350px;
max-height:350px;
object-fit:cover;
border-radius:5px;
border: 2px;`

export const ImageContainer = styled.div`
position:relative;
display:block;
max-width:350px;
margin:5px;`

export const SmallImage = styled.img`
width:80px;
height:80px;
object-fit:cover;
padding:11px;
border:2px;
border-radius:5px;`
export const Scrolldiv = styled.div`
position:relative;
width:400px;
border: 2px;
margin:5px;
left:20px;`

export const Plist = styled.li`
color:grey;
border-bottom-style: dashed;
border-bottom-color:#BA7D82;
border-bottom-width: thin;
padding: 5px;

::before { 
  content: "";
  border-color: transparent #BA7D82;
  border-style: solid;
  border-width: 0.35em 0 0.35em 0.45em;
  display: block;
  height: 0;
  width: 0;
  left: -1em;
  top: 0.9em;
  position: relative;
}`

export const Pspan = styled.span`
color:black;
font-size:25px;
position:relative;
top:30px;`

export const Productpara =styled.p`
color:black;
font-size:15px;
`

export const DetailsContainer = styled.div`
display:block;
position:relative;
`