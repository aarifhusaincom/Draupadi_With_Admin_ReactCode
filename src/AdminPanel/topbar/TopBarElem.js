import styled from 'styled-components';

 export const TopBar = styled.div`
 width: 100%;
 height: 100px;
 background-color:Transparent;
 position: relative;
 top: 0;
 z-index: 999;
 `
 export const TopBarWraper = styled.div`
 height:100%;
 padding:0px 20px;
 display:flex;
 align-items:center;
 justify-content:space-between;`

 export const Logo = styled.span`
 font-weight:bold;
 font-size: 30px;
 cursor:pointer;
 align-items:center;
 position: relative;
 top:5px;
 `
 export const RightContainer = styled.div`
 display:fex;
 align-items:center;`

 export const TopBarIconContainer = styled.div`
 position:relative;
 cursor:pointer;
 margin-right: 10px;
 color:#555;
 `
 export const TopIconBadge = styled.span`
 position:absolute;
 top:-5px;
 right:0px;
 background-color:red;
 color:white;
 border-radius:50%;
 width:15px;
 height:15px;
 display:flex;
 align-items:center;
 justify-content: center;
 font-size:10px;`
 
 export const TopAvatar = styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 cursor: pointer;`