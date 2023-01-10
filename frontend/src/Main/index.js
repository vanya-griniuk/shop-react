import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './styles.css';

const Main = ({setCartItemsCount}) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:3001')
      .then((response) => response.json())
      .then(setProducts);
  }, [])

  return (
    <main id="container" className="container">
      {
        products.length
          ? (
            products.map(({ id, name, description, price, img }) => (
              <Card 
                key={id}
                name={name}
                description={description}
                price={price}
                img={img}
                setCartItemsCount={setCartItemsCount}
              />
            ))
          )
          : <span className="loader"></span>
      }
    </main>
  );
};

export default Main;

