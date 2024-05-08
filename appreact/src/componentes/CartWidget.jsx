import React from 'react'
import cart from '../assets/cart.svg';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

function CartWidget() {
  const {items} = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0)

  return (
    <Link to="/cart">
    <div>
        <img src={cart} alt="Icono del carrito" title='Ver carrito' />
        {total}
    </div>
    </Link>
  )
}

export default CartWidget
