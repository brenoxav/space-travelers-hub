import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <h1>Space Traveler Hub</h1>
      <nav>
        <NavLink to="/" activeClassName="selected" exact>Rockets</NavLink>
        <NavLink to="/missions" activeClassName="selected" exact>Missions</NavLink>
        <NavLink to="/my-profile" activeClassName="selected" exact>My Profile</NavLink>
      </nav>
    </div>
  );
}
