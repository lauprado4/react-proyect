import React from 'react'
import cart from '../assets/cart.svg';
import './CartWidget.css'
import { Link } from 'react-router-dom';

function CartWidget() {
  
  return (
    <Link to="/cart">
    <div>
        <img src={cart} alt="Icono del carrito" />
        4
    </div>
    </Link>
  )
}

export default CartWidget
