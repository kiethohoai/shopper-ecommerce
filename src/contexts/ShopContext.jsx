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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === +item);
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext };
export default ShopContextProvider;
