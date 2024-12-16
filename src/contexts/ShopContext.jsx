import { createContext, useState } from 'react';
import all_product from '../components/assets/all_product';

const getDefaulCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

// ShopContext
const ShopContext = createContext(null);

// ShopContextProvider

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaulCart());

  const addToCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  const contextValue = { all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext };
export default ShopContextProvider;
