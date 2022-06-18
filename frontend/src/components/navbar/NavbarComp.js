import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {BrowserRouter ,Link } from "react-router-dom";
import logo from './nakama.png';
export default class NavbarComp extends Component {
  render() {
    return (
   
        <div>
          <Navbar bg="light text-dark p-3" expand="lg">
              <Container>
              <Navbar.Brand href="/" className='text-white'><img src={logo} alt="" width="100" height="50"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                <Nav>
                 <Link to="/" className="nav-link ">Home</Link>
                 <Link to="/category" className="nav-link  ">Category</Link>
                 <Link to="/about-us" className="nav-link ">About Us</Link>
                 <Link to="/login" className="nav-link  ms-5">Login</Link> 
                 <Link to="/register" className="nav-link ">Register</Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>


    )
  }
}
