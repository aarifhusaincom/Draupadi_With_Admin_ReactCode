import styled from 'styled-components';
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';

export const FeaturedDiv = styled.div`
width:100%;
display:flex;
margin: 20px 10px;
justify-content:space-between;
`
export const FeaturedItem = styled.div`
flex: 1;
margin: 0px 20px;
padding:30px;
border-radius: 10px;
cursor: pointer;
box-shadow: -5px 2px 18px 0px rgba(11,10,10,0.75);
-webkit-box-shadow: -5px 2px 18px 0px rgba(11,10,10,0.75);
-moz-box-shadow: -5px 2px 18px 0px rgba(11,10,10,0.75);`

export const FeaturedTitle = styled.span`
font-size: 20px;
`

export const FeaturedMoneyContainer = styled.div`
display: flex;
align-items: center;
margin:10px 0px;`

export const FeaturedMoney = styled.span`
font-size:30px;
font-weight: 600px;
`
export const FeaturedMoneyRate = styled.span`
display:flex;
align-items: center;
margin-left: 20px;`

export const IconTwo = styled(ArrowUpward)`
font-size:14px;
color: green;
margin-left: 5px;`

export const IconOne = styled(ArrowDownward)`
color:red;
font-size: 14px;
margin-left: 5px;`

export const FeaturedSub = styled.span`
font-size:15px;
color: grey;`

