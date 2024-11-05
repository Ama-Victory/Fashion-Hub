import React, { useEffect, useState } from 'react'
import { IoStarHalf } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import './Review.css'


export const Review = () => {

  return (
    <div className="ReviewContainer">
      <div className="newcartInner">
        <div className="ReviewDetailsConatiner">
          <div className="REVIEWcONATINERINNER">
            <div className="AmountContainer">
              <h1>Beautiful Nails</h1>
              <h4>#50000</h4>
              <div>
                <IoStarHalf className="Stars" />
                <IoStarHalf className="Stars" />
                <IoStarHalf className="Stars" />
                <IoStarHalf className="Stars" />
                <IoStarHalf className="Stars" />
              </div>
            </div>

            <p className="prveiew">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              inventore ab beatae quae vitae perspiciatis? Vel commodi ut, in,
              impedit sit nemo id natus, consequatur quasi nostrum consectetur
              aliquid quas!
            </p>

            <button className="Addbutton">Add</button>
          </div>

          <div className="ReviewSideContainer">
            <div className="HolderImageContainer">
              <img
                src="./src/assets/Nailss.jpg"
                alt=""
                className="ImageNairs"
              />

              <div className="StarPriceConatiner">
                <p className="LastPrice">#30000</p>
                <div>
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                </div>
              </div>
            </div>

            <div className="HolderImageContainer">
              <img
                src="./src/assets/Nailss.jpg"
                alt=""
                className="ImageNairs"
              />

              <div className="StarPriceConatiner">
                <p className="LastPrice">#30000</p>
                <div>
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                </div>
              </div>
            </div>

            <div className="HolderImageContainer">
              <img
                src="./src/assets/Nailss.jpg"
                alt=""
                className="ImageNairs"
              />

              <div className="StarPriceConatiner">
                <p className="LastPrice">#30000</p>
                <div>
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                  <IoStarHalf className="Stars2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ReviewImageContainer">
          <img src="./src/assets/Nailss.jpg" alt="" className="ImageNairs2" />
        </div>

        <MdCancel className="cancleIcon" />
      </div>
    </div>
  );
}
