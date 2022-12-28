import React, { useState, useEffect } from 'react';
import './styles.css'

const Main = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
  //   fetch('http://127.0.0.1:3001').then((response) => response.json()).then((response) => console.log(response));
  // }, [])

  return (
    <main id="container" className="container"></main>
  );
};

export default Main;