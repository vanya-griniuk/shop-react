import React, { useState } from "react";
import { Dash, Plus } from 'react-bootstrap-icons';
import './styles.css';

const Card = ({ name, description, price, img, setCartItemsCount }) => {
  const [productCount, setProductCount] = useState(0);

  const onMinusButtonClick = () => {
    if (productCount) {
      setProductCount((count) => count - 1);
      setCartItemsCount((count) => count - 1);
    }
  };

  const onPlusButtonClick = () => {
    setProductCount((count) => count + 1);
    setCartItemsCount((count) => count + 1);
  };

  return (
    <div className="card">
      <img className="card-img" src={`images/${img}`} />
      <div className="card-info">
        <p className="card-title">{name}</p>
        <p>{description}</p>
        <div className="card-price-container">
          <p className="card-price">${price}</p>
          <div className="card-counter-container">
            <button className="card-counter-button" onClick={onMinusButtonClick}>
              <Dash />
            </button>
            <div className="card-counter-current">{productCount}</div>
            <button className="card-counter-button" onClick={onPlusButtonClick}>
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card