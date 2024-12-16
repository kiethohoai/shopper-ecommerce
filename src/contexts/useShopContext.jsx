import { useContext } from 'react';
import { ShopContext } from './ShopContext';

const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined)
    throw new Error('Cannot use ShopContext outside the ShopContextProvider');

  return context;
};

export default useShopContext;
