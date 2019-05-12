import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Play</Link>
    </li>
    <li>
        <Link to="/rules">Rules</Link>
    </li>
  </ul>
)

export default Navbar;
