import React from 'react'
import cart from '../assets/cart.svg';
import './CartWidget.css' 

function CartWidget() {
  return (
    <div>
        <img src={cart} alt="Icono del carrito" />
        4
    </div>
  )
}

export default CartWidget
