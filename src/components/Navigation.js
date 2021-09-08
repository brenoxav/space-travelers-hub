import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/planet.png';

export default function Navigation() {
  return (
    <Navbar bg="light">
      <Container className="container-xl">
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
          <NavLink to="/" className="navlink" activeClassName="navlink-active" exact>Rockets</NavLink>
          <NavLink to="/missions" className="navlink" activeClassName="navlink-active" exact>Missions</NavLink>
          <NavLink to="/my-profile" className="navlink" activeClassName="navlink-active" exact>My Profile</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
