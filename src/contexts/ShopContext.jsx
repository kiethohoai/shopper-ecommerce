import { createContext } from 'react';
import all_product from '../components/assets/all_product';

// ShopContext
const ShopContext = createContext(null);

// ShopContextProvider
const ShopContextProvider = ({ children }) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext };
export default ShopContextProvider;
