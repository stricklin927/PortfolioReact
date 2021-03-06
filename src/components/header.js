import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export function Header() {
  return (
    <React.Fragment>
    <Navbar bg="warning" variant="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Portfolio</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </React.Fragment>
    );
  };

export default Header;