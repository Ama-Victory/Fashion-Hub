import React from "react";
import "./card.css";
import Header from "../Header/Header";

const Card = () => {
  const card = [{}];
  return (
    <div>
      <Header />
      <div className="cardContainer">
        <div className="cardcontainerInner">
          <div className="CardcontainerIn">
            <div className="PicSec">
              <img
                src="https://i.pinimg.com/1200x/28/66/0b/28660b9753a3ea4758dcad3e6a85f7fb.jpg"
                alt=""
                className="pic"
              />
            </div>
            <h4>Female nails bling with nail polish and shine dust powder</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
