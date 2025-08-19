import React, { useEffect, useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../CartContext";


const Nav = () => {
  const { cart } = useCart();

  // calculate total quantity in cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // state for animation
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cartCount === 0) return;
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCount]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container d-flex ">
          <NavLink className="navbar-brand fw-bold fs-2" to="/">
            Let's Shop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/abouts">
                  Abouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="button">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-2"></i>Login
              </NavLink>

              <NavLink to="/sing" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>

              <NavLink to="/cart" className="cart-btn ms-2 ">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart{" "}
                <span className={`cart-count ${animate ? "bump" : ""}`}>
                  ({cartCount})
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
