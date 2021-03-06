import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export function Header() {
  return (
    <Navbar bg="warning" variant="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./home" className="NavLink">Home</Nav.Link>
          <Nav.Link href="./portfolio" className="NavLink">Portfolio</Nav.Link>
          <Nav.Link href="./contact" className="NavLink">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  };

export default Header;