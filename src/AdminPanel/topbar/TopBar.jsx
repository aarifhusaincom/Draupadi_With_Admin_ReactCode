import React from 'react';
import {TopAvatar,TopBarWraper,TopBar,Logo,TopIconBadge,RightContainer,TopBarIconContainer} from './TopBarElem';
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import  { ReactComponent as Pic} from '../../images/Group 18.svg';
import {Link} from 'react-router-dom';
export default function Topbar() {
    return(
        <TopBar>
        <TopBarWraper>
        <div>
        <Link to='/'><Logo Style={'height:79px;width:79px;'}><Pic/></Logo></Link>
        </div>
        <h1> ADMIN! </h1>
        <RightContainer>
        <TopBarIconContainer>
        <NotificationsNone/>
        <TopIconBadge>3</TopIconBadge>
        </TopBarIconContainer>
        <TopBarIconContainer>
        <Language/>
        <TopIconBadge>3</TopIconBadge>
        </TopBarIconContainer>
        <TopBarIconContainer>
        <Settings/>
        <TopIconBadge>3</TopIconBadge>
        </TopBarIconContainer>
        <TopAvatar/>
        </RightContainer>
        </TopBarWraper>
        </TopBar>
    )
}