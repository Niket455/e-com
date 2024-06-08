import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../context/cart_context";

const Navbar = () => {
  const { total_item } = useCartContext();
  return (
    <div>
      <nav className="NavbarItems">
        <h1>GWORL</h1>

        <ul className="nav-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/cart" className="shopping-cart">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--items"> {total_item}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
//   }
// }
export default Navbar;
