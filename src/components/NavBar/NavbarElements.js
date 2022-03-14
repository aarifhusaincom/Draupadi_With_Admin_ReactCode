
import styled from'styled-components';
import {Link} from 'react-router-dom';
import {SuitHeart} from '@styled-icons/bootstrap/SuitHeart';
import {Search} from '@styled-icons/ionicons-sharp/Search';
import {UserCircle} from '@styled-icons/fa-solid/UserCircle';
import {ShoppingCart} from '@styled-icons/entypo/ShoppingCart';

export const NavLink = styled(Link)`
color: #404040;
display: flex;
align-items: center;
text-decoration: none;
padding-top:5px;
font-weight:100%;
cursor: pointer;
     }`

export const Bar1 = styled(Search)`
color: #404040;

`

export const Bar2 = styled(UserCircle)`
color:#404040;
`

export const Bar3 = styled(ShoppingCart)`
color:#404040;
`

export const Bar = styled(SuitHeart)`
color:#404040;
`



