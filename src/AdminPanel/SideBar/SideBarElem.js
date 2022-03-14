import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {LineStyle,MonetizationOn,CallToAction,Message,Feedback,Email,PeopleOutline,Assessment,AttachMoney,TrendingUp,Timeline,PermIdentity} from '@material-ui/icons';

export const SideLink = styled(Link)`
text-decoration:none;
color:black;
`

export const IconsOne = styled(LineStyle)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsTwo = styled(Timeline)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsThree = styled(TrendingUp)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsFour = styled(PermIdentity)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsFive = styled(CallToAction)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsSix = styled(AttachMoney)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`


export const IconsSeven = styled(Assessment)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsEight = styled(Email)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsNine = styled(Feedback)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsTen = styled(Message)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsEleven = styled(MonetizationOn)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`

export const IconsTwelve = styled(PeopleOutline)`
margin-right: 5px;
font-size: 20px ! important;
color:#555;`


export const SideBarDiv = styled.div`
flex:1;
height: 100%;
background-color: #cdac79;
top:50px;
width: auto;
position: sticky;
margin: 20px 0px;`

export const SidebarWraper = styled.div`
padding: 20px;
color: black;`

export const SidebarMenu = styled.div`
margin-bottom: 10px;`

export const SidebarTitle = styled.h3`
font-size:13px;
color:black;`

export const SideBarList = styled.ul`
list-style:none;
padding: 5px;`

export const SideBarListItem = styled.li`
padding: 5px;
cursor:pointer;
align-items: center;
border-radius: 10px;
display:flex;
&:hover{
    background-color:#ffa300;
}
&.active{
    background-color:#ffa300;
}`