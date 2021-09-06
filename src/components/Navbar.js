import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <h1>Space Traveler' Hub</h1>
      <nav>
        <NavLink to="/">Rockets</NavLink>
        <NavLink activeClassName="selected" to="/missions">Missions</NavLink>
        <NavLink activeClassName="selected" to="/my-profile">My Profile</NavLink>
      </nav>
    </div>
  )
}
