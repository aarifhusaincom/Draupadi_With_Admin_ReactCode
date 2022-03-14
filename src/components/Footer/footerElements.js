

import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const FooterDiv = styled.div`
min-height: 400px;
background-color: #cdac79;
opacity:1;
 `

export const Information = styled.div`
top:25px;
text-align:left;
position:relative;
`
export const FooterHeader = styled.h1`
font-size:14px;
font-family:Amiri,serif;
font-weight:100%;
text-align:left;
position:relative;
font-weight: 700;
color:black;`

export const FooterHeader1 = styled.h1`
font-size:14px;
font-weight:100%;
text-align:left;
position:relative;
font-family:Amiri,serif;
font-weight: 700;
color:black;`


export const Contacts = styled.div`
top:25px;
color: black;
position:relative;
`


export const Updates = styled.div`
top:25px;
position:relative;
`

export const About = styled.div`
top:25px;
text-align:left;
position:relative;
`

export const FooterLink = styled(Link)`
color: black;
font-size:14px;
font-family:Amiri,serif;
display: flex;
text-decoration: none;
text-align:left;
padding-top: 1rem;
padding-bottom: 1rem;
padding-right: 1rem;
font-weight:100%;
justify-content:space-between;`

export const FooterInput = styled.input`
max-width: 250px;
height: 35px;
font-size:15px;`

export const FooterBtn = styled.button`
max-width: 250px;
top:5px;
font-size:15px;
position:relative;
height: 35px;
color: white;
background-color:black;`
