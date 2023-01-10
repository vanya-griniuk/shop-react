import { useState } from 'react';
import Header from '../Header';
import Main from '../Main';
import './styles.css';

const App = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  return (
    <>  
      <Header cartItemsCount={cartItemsCount} />
      <Main setCartItemsCount={setCartItemsCount} />
    </>
  );
}

export default App;
