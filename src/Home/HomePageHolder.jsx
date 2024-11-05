import React from "react";
import Header from "../Header/Header";
import HomePage from "./HomePage";
// import Cart from '../Header/Cart/Cart'
import Cart from "../Header/Cart/Cart";
import Card from "../Card/Card";
import NewCart from "../NewCart/NewCart";
import { Review } from "../Review/Review";
import "./Mobile.css"

const HomePageHolder = () => {
  return (
    <div>
      <Header />
      <HomePage />
      {/* <Cart />  */}
      {/* <Review/> */}
    </div>
  );
};

export default HomePageHolder;
