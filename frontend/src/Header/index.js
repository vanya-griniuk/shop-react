import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import './styles.css'


const Header = ({cartItemsCount}) => (
  <header className="header"> 
    <a href="index.html">
      <h1>Clothing Store</h1>
    </a>

    <a href="./pages/cart.html">
      <div className="cart">
        <Cart />
        <div id="cart-items-counter" className="cart-items-counter">
          {cartItemsCount}
        </div>
      </div>
    </a>
  </header>
);

export default Header;