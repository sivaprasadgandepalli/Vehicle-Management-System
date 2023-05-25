import React, { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logonav from './images/logonav.png'
import {FaSignInAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <Navbar collapseOnSelect sticky='top' expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img className='img'id='cdimg' style={{height:'60px',width:'60px',borderRadius:'50%'}}
        src={logonav} alt='image'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/GetDetails'>View</Nav.Link>
                <Nav.Link href='/contactPage'>Contact us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/loginPage"><Button variant="outline-info">Logout<span style={{marginLeft:'5px'}}>< FaSignInAlt/></span></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;