import './Navbar.css';

import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useShopContext from '../../contexts/useShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useShopContext();

  return (
    <div className="navbar">
      {/* Nav Logo */}
      <div className="nav_logo">
        <img src={logo} alt="Nav Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Nav Menu */}
      <div className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link to="/">Shop</Link> {menu === 'shop' ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu('men')}>
          <Link to="/mens">Men</Link> {menu === 'men' ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu('women')}>
          <Link to="/womens">Women</Link> {menu === 'women' ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu('kids')}>
          <Link to="/kids">Kids</Link> {menu === 'kids' ? <hr /> : <></>}
        </li>
      </div>

      {/* Nav Login Cart */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="Nav Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
