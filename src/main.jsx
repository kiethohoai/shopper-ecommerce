import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import ShopContextProvider from './contexts/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>,
);
