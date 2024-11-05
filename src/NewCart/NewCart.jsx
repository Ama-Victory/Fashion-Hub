import React from "react";
import imageOne from "../assets/Nailss.jpg";
import imageTwo from "../assets/Nailss.jpg";
import imageThree from "../assets/Nailss.jpg";
import imageFour from "../assets/Nailss.jpg";

import "./newcart.css";

const NewCart = () => {
  const products = [
    {
      name: "Essential Beauty Nails",
      price: "300",
      info: "nails design",
      image: imageOne,
    },
    {
      name: "Essential Beauty fashion",
      price: "500",
      info: "fashion design",
      image: imageTwo,
    },

    {
      name: "Essential Beauty fashion",
      price: "500",
      info: "fashion design",
      image: imageTwo,
    },
  ];

  const totalPrice = products.reduce(
    (acc, current) => acc + parseFloat(current.price),
    0
  );

  const productsOutput = products.slice(0, 4).map((cart, i) => (
    <li className="li-Tags">
      <img src={cart.image} width="100" />
      <div className="">
        <div>
          <h4>{cart.name}</h4>
          <h5>${cart.price}</h5>
          <p>{cart.info}</p>
        </div>
        <div>
          <div>+</div>
          <div>1</div>
          <div>-</div>
        </div>
           {/* <div>delete</div> */}
      </div>
    </li>
  ));

  return (
    <div className="cart">
      <h3>cart</h3>
      <div className="cartOutput">
        <ul>{productsOutput}</ul>
        <button>Checkout ${totalPrice}</button>
      </div>
    </div>
  );
};

export default NewCart;
