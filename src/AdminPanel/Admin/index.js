import Topbar from '../topbar/TopBar';
import SideBar from '../SideBar/SideBar';
import {ContainerDiv} from './indexElem';
import Home from '../Pages/Home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UserList from '../Pages/User/UserList';
import OrderTable from '../Pages/OrderList/Order';
import UserTable from '../Pages/User/NewUser';
import AllOrderTable from '../Pages/OrderList/AllOrder';
export default function Admin() {
    return(
        <>
        <Router>
        <Topbar/>
        <ContainerDiv>
        <SideBar/>
        <Switch>
        <Route  exact path='/AdminDashboard'><Home/></Route>
        <Route  path='/Order'><UserList/></Route>
        <Route  path='/UserList'><OrderTable/></Route>
        <Route  path='/newUsers'><UserTable/></Route>
        <Route  path='/allOrders'><AllOrderTable/></Route>
        </Switch>
        </ContainerDiv>
        </Router>
        </>
    )
}