import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './styles.css';

const Main = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:3001').then((response) => response.json()).then(setProducts);
  }, [])

  return (
    <main id="container" className="container">
      { products.map(({ id, name, description, price, img }) => (
        <Card 
          key={id}
          name={name}
          description={description}
          price={price}
          img={img}
        />
      )) }
    </main>
  );
};

export default Main;

