import React, { useContext, useEffect, useState } from "react";
import "./AddToCart.css";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { ImPaypal } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import Header from "../Header/Header";
import { EcommerceContext } from "../Api/contextApi";
import { useSelector,useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
  clearCart,
  TotalQty,
  hanlePrice,
} from "../global/features";


const AddToCart = () => {

  const newCart =useSelector((state)=>state?.ecommerce?.cart)
  console.log(newCart)

  // const {cart, dispatch}=useContext(EcommerceContext)
  const dispatcher = useDispatch()

  const [amount, setAmount] = useState(0)

  const handlePrice = () =>{
    let ans = 0
    newCart.forEach((item) =>(
      ans +=  item.QTY * item.price
    ))
 setAmount(ans)
  }
  
useEffect(() =>{
  handlePrice()
})

  return (
    <div className="CheckoutReview " style={{ padding: "50px" }}>
      {/* <Header /> */}
      <div className="CheckoutInnerRapper">
        <div className="CheckoutReviewContainerinner">
          <div className="CheckoutContainerRapper1">
            <h3>Payment Method</h3>
            <div className="CheckoutType">
              <div className="CheckoutCard">
                <MdOutlineRadioButtonChecked className="CheckoutIcons1" />
                <BsCashCoin className="checkoutIcons2" />
              </div>

              <div className="checkoutPaypal">
                <MdRadioButtonUnchecked className="CheckoutIcons1" />
                <div className="CheckoutPaypalDisplay">
                  <ImPaypal className="checkoutIcons3" />
                  <h4>PayPal</h4>
                </div>
              </div>
            </div>

            <div className="CheckoutContainerTwo">
              <p>Payment Details</p>
              <div className="CheckoutContainerinsiderapper">
                <input
                  type="text"
                  className="CheckoutInputdiv1"
                  placeholder="Enter Name"
                />
                <input
                  type="text"
                  className="CheckoutInputdiv2"
                  placeholder="Card Number"
                />
                <div className="CheckOutInputContainerRapper">
                  <input
                    type="text"
                    className="CheckoutInputdiv3"
                    placeholder="Expiration"
                  />
                  <input
                    type="text"
                    className="CheckoutInputdiv4"
                    placeholder="CVV Code"
                  />
                </div>
              </div>
              <p className="CheckoutpTag">
                By Clicking “Confirm payment” <br />i agree to the Compaines
                terms and condition
              </p>
            </div>

            <div className="CheckoutButtonContainer">
              <button className="CheckoutButtonTag1">Back</button>
              <button className="CheckoutButtonTag2">Confirm Payment</button>
            </div>
          </div>

          <div className="CheckoutContainerRapper2">
            <div className="CheckoutContainerRapper2inner">
              <div>
                <h3>
                  {newCart.length}
                  TotalQuantity
                </h3>
              </div>
              <h3>Our Products</h3>
              {/* <div className="clearAll-Div"> */}
              <button
                className="clearAll"
                onClick={() => dispatcher(clearCart())}
              >
                Clear All
              </button>
              {/* </div> */}

              {newCart.map((e) => (
                <div className="CheckOutItemsListed">
                  <div className="Checkoutlistinside1">
                    {/* <div className="CheckoutProduct"></div> */}
                    <img src={e.image} alt="" className="CheckoutProduct" />
                    <div className="CheckoutProductInfo">
                      {e.title}
                      <h4>Nails</h4>
                      <p className="ptageCheckout"></p>
                      <p className="ptageCheckout"></p>
                    </div>
                  </div>

                  <div className="checkoutlistinside2">
                    <div className="CheckoutnumberHolder">
                      <h4
                        className="CheckoutIconsAdd"
                        onClick={() => dispatcher(decreaseQuantity(e))}
                      >
                        -
                      </h4>
                      <h4>{e.QTY}</h4>
                      <h4
                        className="CheckoutIconsAdd"
                        onClick={() => dispatcher(increaseQuantity(e))}
                      >
                        +
                      </h4>
                    </div>

                    <div className="CheckoutAmount">
                      
                      <h5>${e.price}</h5>
                    </div>
                  </div>

                  <div className="CheckoutListinside3">
                    <MdDelete
                      className="CheckoutDelete"
                      onClick={() => dispatcher(deleteFromCart(e))}
                    />
                  </div>
                </div>
              ))}

              {/* <div className="CheckOutItemsListed">
                <div className="Checkoutlistinside1">
                  <div className="CheckoutProduct"></div>
                  <div className="CheckoutProductInfo">
                    <h4>Nails</h4>
                    <p className="ptageCheckout">Shining Nails</p>
                    <p className="ptageCheckout">Colour : Pink</p>
                  </div>
                </div>

                <div className="checkoutlistinside2">
                  <div className="CheckoutnumberHolder">
                    <h4 className="CheckoutIconsAdd">-</h4>
                    <h4>4</h4>
                    <h4 className="CheckoutIconsAdd">+</h4>
                  </div>

                  <div className="CheckoutAmount">
                    <h5>$500</h5>
                  </div>
                </div>

                <div className="CheckoutListinside3">
                  <MdDelete className="CheckoutDelete" />
                </div>
              </div>

              <div className="CheckOutItemsListed">
                <div className="Checkoutlistinside1">
                  <div className="CheckoutProduct"></div>
                  <div className="CheckoutProductInfo">
                    <h4>Nails</h4>
                    <p className="ptageCheckout">Shining Nails</p>
                    <p className="ptageCheckout">Colour : Pink</p>
                  </div>
                </div>

                <div className="checkoutlistinside2">
                  <div className="CheckoutnumberHolder">
                    <h4 className="CheckoutIconsAdd">-</h4>
                    <h4>4</h4>
                    <h4 className="CheckoutIconsAdd">+</h4>
                  </div>

                  <div className="CheckoutAmount">
                    <h5>$500</h5>
                  </div>
                </div>

                <div className="CheckoutListinside3">
                  <MdDelete className="CheckoutDelete" />
                </div>
              </div>

              <div className="CheckOutItemsListed">
                <div className="Checkoutlistinside1">
                  <div className="CheckoutProduct"></div>
                  <div className="CheckoutProductInfo">
                    <h4>Nails</h4>
                    <p className="ptageCheckout">Shining Nails</p>
                    <p className="ptageCheckout">Colour : Pink</p>
                  </div>
                </div>

                <div className="checkoutlistinside2">
                  <div className="CheckoutnumberHolder">
                    <h4 className="CheckoutIconsAdd">-</h4>
                    <h4>4</h4>
                    <h4 className="CheckoutIconsAdd">+</h4>
                  </div>

                  <div className="CheckoutAmount">
                    <h5>$500</h5>
                  </div>
                </div>

                <div className="CheckoutListinside3">
                  <MdDelete className="CheckoutDelete" />
                </div>
              </div>

              <div className="CheckOutItemsListed">
                <div className="Checkoutlistinside1">
                  <div className="CheckoutProduct"></div>
                  <div className="CheckoutProductInfo">
                    <h4>Nails</h4>
                    <p className="ptageCheckout">Shining Nails</p>
                    <p className="ptageCheckout">Colour : Pink</p>
                  </div>
                </div>

                <div className="checkoutlistinside2">
                  <div className="CheckoutnumberHolder">
                    <h4 className="CheckoutIconsAdd">-</h4>
                    <h4>4</h4>
                    <h4 className="CheckoutIconsAdd">+</h4>
                  </div>

                  <div className="CheckoutAmount">
                    <h5>$500</h5>
                  </div>
                </div>

                <div className="CheckoutListinside3">
                  <MdDelete className="CheckoutDelete" />
                </div>
              </div> */}

              <div className="CheckoutTotalCalculation">
                <div className="CheckoutTotalCalculationInner">
                  <h4>Total</h4>
                  <h3>{amount}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
