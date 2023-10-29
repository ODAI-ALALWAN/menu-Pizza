import React, { useState } from 'react';

import './CartApp.css'

import { Link } from 'react-router-dom';


import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

import { useSelector } from 'react-redux';

function CartApp() {
  const [cartTotal, setCartTotal] = useState(0);
  const [isSendingToCart, setIsSendingToCart] = useState(false);

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  const addToCart = () => {
    setIsSendingToCart(true);
    setTimeout(() => {
      setIsSendingToCart(false);
      setCartTotal(cartTotal + 1);
    }, 1000);
  };

  const cartClasses = isSendingToCart ? 'cart shake' : 'cart';

  return (
    <div className="page-wrapper">
      <button id="addtocart" onClick={addToCart}>
        Add to Cart
        <span className="cart-item">{cartTotal}</span>
      </button>
      <div id="cart" className={cartClasses} data-totalitems={cartTotal}>
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </div>
  );
}

export default CartApp;
