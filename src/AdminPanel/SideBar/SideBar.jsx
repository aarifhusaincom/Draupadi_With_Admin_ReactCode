import React from 'react';
import  '../Pages/OrderList/Order';
import '../Pages/User/UserList';
import {SideBarDiv,SideLink,SidebarWraper,SidebarMenu,SidebarTitle,
SideBarList,SideBarListItem,IconsOne,IconsTwo,IconsThree,
IconsFour,IconsFive,IconsSix,IconsSeven,IconsEight,IconsNine,IconsTen,IconsEleven,IconsTwelve} from './SideBarElem';
export default function SideBar() {
    return (
        <SideBarDiv>
            <SidebarWraper>
            <SidebarMenu>
            <SidebarTitle>Dashboard</SidebarTitle>
            <SideBarList>
            <SideBarListItem className='active'><SideLink to='/AdminDashboard'>
            <IconsOne/> Home</SideLink>
            </SideBarListItem>
            </SideBarList>
            </SidebarMenu>
            <SidebarMenu>
            <SidebarTitle>Products Management</SidebarTitle>
            <SideBarList>
            <SideBarListItem >
            <IconsFive/> Products
            </SideBarListItem>
            <SideBarListItem >
            <IconsSix/> Transactions
            </SideBarListItem>
            <SideBarListItem >
            <IconsEleven/> Offers
            </SideBarListItem>
            </SideBarList>
            </SidebarMenu>
            <SidebarMenu>
            <SidebarTitle>Customer Management</SidebarTitle>
            <SideBarList>
            <SideBarListItem><SideLink to='/UserList'>
            <IconsFour/> Users</SideLink>
            </SideBarListItem>  
            <SideBarListItem><SideLink to='/newUsers'>
            <IconsTwelve/> New Users</SideLink>
            </SideBarListItem>
            </SideBarList>
            </SidebarMenu>
            <SidebarMenu>
            <SidebarTitle>Order Management</SidebarTitle>
            <SideBarList>
            <SideBarListItem><SideLink to='/Order'>
            <IconsEight/> Orders</SideLink>
            </SideBarListItem>
            <SideBarListItem ><SideLink to ='/allOrders'>
            <IconsNine/>All Orders</SideLink>
            </SideBarListItem>
            </SideBarList>
            </SidebarMenu>
            <SidebarMenu>
            <SidebarTitle>Reports and Analytics</SidebarTitle>
            <SideBarList>
            <SideBarListItem >
            <IconsSeven/> Reports
            </SideBarListItem>
            <SideBarListItem >
            <IconsTwo/> Analytics
            </SideBarListItem>
            <SideBarListItem >
            <IconsThree/> sales
            </SideBarListItem>
            </SideBarList>
            </SidebarMenu>
            
            <SidebarMenu>
            <SidebarTitle>Notification</SidebarTitle>
            <SideBarList>
            <SideBarListItem >
            <IconsEight/> Mail
            </SideBarListItem>
            <SideBarListItem >
            <IconsNine/> Feedback
            </SideBarListItem>
            <SideBarListItem >
            <IconsTen/> Messages
            </SideBarListItem>
            </SideBarList>
            </SidebarMenu>
            </SidebarWraper>
        </SideBarDiv>
    )
}
