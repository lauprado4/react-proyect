import "./NavBar.css";
import React from 'react';
import CartWidget from "./CartWidget";
import logo from '../assets/logoTimeLapse2.png'

function Navbar() {
  return (
    <nav className="nav-container">
        <div className="logo-container">
            <img src={logo} alt="Logo de TimeLapse" />
            <a href="#"><h1>TimeLapse</h1></a>
        </div>
        <ul className="list-container">
            <li><a href="">RUNNING</a></li>
            <li><a href="">DEPORTIVAS</a></li>
            <li><a href="">URBANAS</a></li>
            <li><a href="">ELEGANTE</a></li>
            <li><a href="">EXCLUSIVAS</a></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar

