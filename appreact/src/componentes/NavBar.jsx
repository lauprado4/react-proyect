import "./NavBar.css";
import React from 'react';
import CartWidget from "./CartWidget";
import logo from '../assets/logoTimeLapse2.png'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
        <div className="logo-container">
            <img src={logo} alt="Logo de TimeLapse" />
            <NavLink to="/"><h1>TimeLapse</h1></NavLink>
        </div>
        <ul className="list-container">
            <li><NavLink to="category/Running" as={NavLink}>RUNNING</NavLink></li>
            <li><NavLink to="category/Deportivas" as={NavLink}>DEPORTIVAS</NavLink></li>
            <li><NavLink to="category/Urbanas" as={NavLink}>URBANAS</NavLink></li>
            <li><NavLink to="category/Futbol" as={NavLink}>FUTBOL</NavLink></li>
            <li><NavLink to="category/Exclusivas" as={NavLink}>EXCLUSIVAS</NavLink></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar

