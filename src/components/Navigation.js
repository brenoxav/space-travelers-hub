import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/planet.png';

export default function Navigation() {
  return (
    <Navbar bg="light">
      <Container class="container-xl">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="h2">Space Travelers&apos; Hub</span>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <NavLink to="/" activeClassName="selected" exact>Rockets</NavLink>

          </Nav.Link>
          <Nav.Link>
            <NavLink to="/missions" activeClassName="selected" exact>Missions</NavLink>

          </Nav.Link>
          <Nav.Link>
            <NavLink to="/my-profile" activeClassName="selected" exact>My Profile</NavLink>

          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
