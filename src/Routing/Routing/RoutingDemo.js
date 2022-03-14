import React, { Component } from 'react';
import UserForm from '../Assignments/ControlledComponent/UserForm';
import {
    Link, BrowserRouter as Router, Route, Routes, useParams, useLocation,
    Navigate, useNavigate, useRouteMatch
} from 'react-router-dom';
import Profile from '../ChildComponents/Profile';
import Email from '../ChildComponents/Email';
import logo from '../logo.svg';
import { Nav, NavDropdown, Navbar, Form, Container } from 'react-bootstrap';
/*
What is BrowserRouter
BrowserRouter is used for doing client side routing with URL segments.
When we are working with the router in react, in the background it manages 
history API of HTML5, I mean when we routing through different pages that time 
we should maintain history so that components will be available to route back
 again.Basically, it manages three different events which are listed below.

Link : Is a router API which allows accessing navigation throughout the application.

Route : It is used to render the user interface when any location matches.

<Routes></Routes> replaces <Switch></Switch> for finding error page

npm install react-router-dom 
*/
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
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" style={{ fontSize: '28px', fontWeight: 'bold' }}>Home</Nav.Link>
                                <Nav.Link href="/login" style={{ fontSize: '28px', fontWeight: 'bold' }}>Login</Nav.Link>
                                <Nav.Link href="/about/email" style={{ fontSize: '28px', fontWeight: 'bold' }}>Email</Nav.Link>
                                <Nav.Link href="/about/profile" style={{ fontSize: '28px', fontWeight: 'bold' }}>Profile</Nav.Link>
                                <Nav.Link href="/contact" style={{ fontSize: '28px', fontWeight: 'bold' }}>Contact</Nav.Link>
                                <Nav.Link href="/user" style={{ fontSize: '28px', fontWeight: 'bold' }}>UserDetails</Nav.Link>
                                <Nav.Link href="/about" style={{ fontSize: '28px', fontWeight: 'bold' }}>AboutUs</Nav.Link>
                                <Nav.Link href="/electronics/mobile" style={{ fontSize: '28px', fontWeight: 'bold' }}>Electroncis Products</Nav.Link>
                                <Nav.Link href="/electronics/mobile/23232" style={{ fontSize: '28px', fontWeight: 'bold' }}>Product ID</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <div>
                        {/* <Header /> */}
                        {/* <hr></hr> */}
                        <Routes>
                            <Route exact path='/' element={<Home />}></Route>
                            <Route exact path='/contact' element={<Contact phone={789876541} />}></Route>
                            <Route path='/user' element={<UserForm />}></Route>
                            <Route path='/about' element={<AboutUs />}></Route>
                            <Route path='/about/profile' element={<Profile />}></Route>
                            <Route path='/about/email' element={<Email />}></Route>
                            <Route path='/electronics/:category' element={<Electronics />}></Route>
                            <Route path='/electronics/:category/:id' element={<Electronics />}></Route>
                            <Route path='/login' element={<Login isLogged={true} />}></Route>
                            <Route path='/dashboard' element={<Dashboard />}></Route>
                            <Route element={<Error />}></Route>
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

const Electronics = () => {
    const { category, id } = useParams();
    let location = useLocation();
    console.log(location)
    //this.props.match.params.category
    return (
        <div>
            <h1>Electronics Product Name:- {category}</h1>
            <h1>Electronics Product Id:- {id}</h1>
        </div>
    )
}
function Error() {
    return (
        <div>
            <h1>Error 404</h1>
            <h2>Page not Found!!</h2>
        </div>
    )
}
const Login = (props) => {
    return (
        <div>
            {props.isLogged ? <Navigate to="/dashboard" /> : <h1>Please login</h1>}
        </div>
    )
}
const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page!!</h1>
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
                <li><Link to="/email">Email</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/user">UserDetails</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/electronics/mobile">Product</Link></li>
                <li><a href="https://codebetter.in/">codebetter</a></li>
                <li><Link to="/electronics/mobile/12">Product With ID</Link></li>
            </ul>
        </div>
    )
}
