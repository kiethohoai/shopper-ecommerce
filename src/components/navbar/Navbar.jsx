import "./Navbar.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      {/* Nav Logo */}
      <div className="nav_logo">
        <img src={logo} alt="Nav Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Nav Menu */}
      <div className="nav-menu">
        <li onClick={() => setMenu("shop")}>Shop {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("men")}>Men {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("women")}>Women {menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("kids")}>Kids {menu === "kids" ? <hr /> : <></>}</li>
      </div>

      {/* Nav Login Cart */}
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Nav Cart Icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
