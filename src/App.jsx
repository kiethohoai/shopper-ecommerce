import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ShopCategory from './pages/ShopCategory';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';

import banner_mens from './components/assets/banner_mens.png';
import banner_women from './components/assets/banner_women.png';
import banner_kids from './components/assets/banner_kids.png';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory category="men" banner={banner_mens} />}
          />
          <Route
            path="/womens"
            element={<ShopCategory category="women" banner={banner_women} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={banner_kids} />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
