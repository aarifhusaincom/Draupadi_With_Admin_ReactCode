import React, { Component } from 'react';
// import UserForm from './Assignments/ControlledComponent/UserForm';
import {
    Link, BrowserRouter as Router, Route, Routes, useParams, useLocation,
    Navigate, useNavigate,useRouteMatch,
} from 'react-router-dom';
// import Profile from '../ChildComponents/Profile';
// import Email from '../ChildComponents/Email';
import logo from '../logo.svg';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

export default class RoutingDemo extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="light" expand="lg">
                    <Container>
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        <img
                            alt=""
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" style={{ fontSize: '28px', fontWeight: 'bold' }}>Home</Nav.Link>
                                <Nav.Link href="/login" style={{ fontSize: '28px', fontWeight: 'bold' }}>Login</Nav.Link>
                                <Nav.Link href="/contact" style={{ fontSize: '28px', fontWeight: 'bold' }}>ContactUs</Nav.Link>
                                <Nav.Link href="/about" style={{ fontSize: '28px', fontWeight: 'bold' }}>AboutUs</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <div>
                        <Header />
                        <hr></hr>
                        <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                            <Route exact path='/contact' element={<Contact phone={789876541} />}></Route> 
                            <Route path='/about' element={<AboutUs />}></Route>                           
                            <Route path='/login' element={<Login isLogged={true} />}></Route>
                            
                        </Routes>
                    </div>
                </Router>
            </div>
        )
    }
}

const PushComponent = () => {
    let navigate = useNavigate()
    function handleClick() {
        navigate("/contact")
    }
    return (
        <>
            <button type="button" onClick={handleClick}>
                Click Me!
            </button>
        </>
    )
}


const Login = (props) => {
    return (
        <div>
            {props.isLogged ? <Navigate to="/dashboard" /> : <h1>Please login</h1>}
        </div>
    )
}

function AboutUs() {
    return (
        <div>
            <h1>AboutUs Page!!</h1>
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/about/email">Email</Link></li>
                <li><Link to="/about/profile/">Profile</Link></li>
            </ul><hr></hr>

            <PushComponent />

        </div>
    )
}

function Home() {
    return (
        <div>
            <h1>Home Page!!</h1>
        </div>
    )
}
function Contact(props) {
    let navigate = useNavigate()
    return (
        <div>
            <h1>Contact Page!! , Phone Number is:{props.phone}</h1>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    )
}
function Header() {
    return (
        <div>
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>               
                <li><Link to="/contact">Contact</Link></li>              
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>
    )
}
