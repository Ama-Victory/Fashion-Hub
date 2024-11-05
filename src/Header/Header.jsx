import React, { useContext, useState } from "react";
import "./header.css";
import { CiSearch } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import "../Home/Mobile.css";
import { NavLink } from "react-router-dom";
import { EcommerceContext } from "../Api/contextApi";
import { useSelector } from "react-redux";

const Header = ({ handleReview, handleCheckout, handleHome }) => {

  const newCart =useSelector((state)=>state?.ecommerce?.cart)
  console.log(newCart)

  const {cart}=useContext(EcommerceContext)
  return (
    <div className="header-container">
      <div className="headercontainer-Inner">
        <div className="container-Logo">
          <h2>LOGO</h2>
        </div>
        <nav className="nav-container">
          <ul className="ul-container">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/victory/jewelery"
              className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }
            >
              PRODUCTS
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }
            >
              {" "}
              CART(
              {/* {cart.length}  */})
            </NavLink>

            {/* <li onClick={handleHome}>Home</li> */}
            {/* <li onClick={handleCheckout}>Cart</li> */}
            {/* <li onClick={handleReview}>Review</li> */}
            {/* <li>About</li> */}
            <NavLink
              to="review/1"
              className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }
            >
              {" "}
              REVIEWS
            </NavLink>
            <NavLink
              to="detailed"
              className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }
            >
              DETAILS
            </NavLink>
            {/* <li>Review</li> */}
          </ul>
        </nav>
        <div className="searchcontainer">
          <CiSearch size={35} />
          <GiSelfLove size={35} />
          <div>
            <NavLink to='/cart'>
              {newCart.length}
              <GiShoppingCart size={35} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
