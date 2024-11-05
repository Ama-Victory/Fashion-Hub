import React, { useEffect, useState, useContext } from "react";
import "./Detailed.css";
import Header from "../Header/Header";
import { IoStarSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";
// import Viewed from "../Viewed/Viewed";
// import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EcommerceContext } from "../Api/contextApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../global/features";
import { ImEarth } from "react-icons/im";

const Detailed = () => {
  const newCart =useSelector((state)=>state?.ecommerce?.cart)
  console.log(newCart)
  
  const dispatcher= useDispatch()
  
  const {dispatch} = useContext(EcommerceContext)


      const { id } = useParams();
      const [item, setItem] = useState({});
      const [loading, setLoading] = useState(false);
      // const AddToCart =[]

      const getCategories = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          setItem(res?.data);
          setLoading(false);
          console.log(res?.data);
          console.log(res?.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getCategories();
      }, []);
  return (
    <div className="ReviewContainer" style={{ padding: "30px" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* <Header/> */}
          <div className="HeaderReviewRapper"></div>

          <div className="ReviewInnerContainer">
            <div className="ReviewRapperContainer">
              <div className="ReviewRapperInnerContainer">
                <div className="ReviewItemContainers1">
                  <div className="ReviewItemContainerInnerScrole">
                    <div className="ReviewItemContainerInnerScroleRapper">
                      <img
                        className="ReviewItemsContainewrList"
                        src={item.image}
                        alt=""
                      />
                      <img
                        className="ReviewItemsContainewrList"
                        src={item.image}
                        alt=""
                      />
                      <img
                        className="ReviewItemsContainewrList"
                        src={item.image}
                        alt=""
                      />
                      <img
                        className="ReviewItemsContainewrList"
                        src={item.image}
                        alt=""
                      />
                      <img
                        className="ReviewItemsContainewrList"
                        src={item.image}
                        alt=""
                      />
                      <img
                        className="ReviewItemsContainewrList"
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <img
                  className="ReviewItemContainers2"
                  src={item.image}
                  alt=""
                />

                <div className="ReviewItemContainers3">
                  <div className="ReviewItemsDetails1">
                    <h2>{item.title}</h2>

                    <div className="ReviewStar">
                      <div className="ReviewStarRapper">
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                        <IoStarSharp className="HomeStar1" />
                      </div>

                      <p> (190 verified rating) </p>
                    </div>

                    <div className="ReviewBrandDeatils">
                      <p> Brand:</p>
                      <h6>Ama's Collection</h6>
                    </div>
                  </div>

                  <div className="ReviewItemsDetails2">
                    <div className="ReviewitemsDetailsRapper">
                      <h1>${item.price}</h1>
                      <p>230</p>
                      <button className="Reviewpec">- 20</button>
                    </div>

                    <p>{item.description}</p>
                  </div>

                  <div className="ReviewItemsDetails3">
                    <div className="ReviewitemsDetailsUp">
                      <div className="ReviewColorDivs">
                        <p>Color</p>
                        <div className="ReviewColordivMain">
                          <div className="ReviewColors1"></div>
                          <div className="ReviewColors2"></div>
                          <div className="ReviewColors3"></div>
                          <div className="ReviewColors4"></div>
                        </div>
                      </div>

                      <div className="ReviewSizeConatiner">
                        {/* <p>Size</p>
                    <div className="ReviewSizedivMain">
                      <div className="ReviewSize1">S</div>
                      <div className="ReviewSize1">M</div>
                      <div className="ReviewSize1">L</div>
                      <div className="ReviewSize1">XL</div>
                      <div className="ReviewSize1">XXL</div>
                    </div> */}
                      </div>
                    </div>

                    <div className="ReviewitemsDetailsDown">
                      <div className="ReviewAddChart1">
                        <p>QTY</p>
                        <div className="ReviewQTYContainer">
                          <div className="ReviewQtyNumber">{newCart.length}</div>
                          <div className="ReviewQTYNumberContainer">
                            <div className="ReviewQTYAdd">+</div>
                            <div className="ReviewQTYMin">-</div>
                          </div>
                        </div>
                      </div>

                      <div className="ReviewAddChart2">
                        <button
                          className="ReviewADDTOCART"
                          onClick={() => dispatcher(addToCart(item))}
                        >
                          ADD TO CART
                        </button>
                      </div>

                      <div className="ReviewAddChart3">
                        <CiBookmarkPlus className="ReviewBookMark" />
                        <p>Add to Favourite</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ReviewViewedMarket">{/* <Viewed /> */}</div>
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
};

export default Detailed;
