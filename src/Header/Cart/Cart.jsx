import React, { useContext, useEffect, useState } from 'react'
import "./Cart.css"
import { Review } from '../../Review/Review';
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import { EcommerceContext } from '../../Api/contextApi';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../global/features';

// import Header from '../Header'
const Cart = () => {
    //   const carts = [
    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     image:
    //       "https://i.pinimg.com/236x/3a/c9/0e/3ac90e8021cedaff66fb2c7875d5e9be.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://glaminati.com/wp-content/uploads/2023/08/summer-nail-designs-try-july-rainbow-daisies.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://edited.beautybay.com/wp-content/uploads/2022/05/nailsby_gxx.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://i.pinimg.com/236x/3a/c9/0e/3ac90e8021cedaff66fb2c7875d5e9be.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://i.pinimg.com/736x/57/07/4a/57074aa301e098d6327f601b7d984661.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://i.pinimg.com/736x/7e/0e/1a/7e0e1a30203755de39c94dcb0eace3c7.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://i.pinimg.com/736x/14/f1/d8/14f1d86e8caca71d69a988b3941837a4.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://i.pinimg.com/736x/8d/ee/10/8dee10fa9a0e90b63a0fd0b1f0c744bb.jpg",
    //   },

    //   // {details: "Essential beauty nails",
    //   // price: "$300",
    //   // name: "nails designs",
    //   // image:"https://i.pinimg.com/236x/3a/c9/0e/3ac90e8021cedaff66fb2c7875d5e9be.jpg"},

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://www.shutterstock.com/image-photo/butterfly-nails-french-black-white-600nw-2350224379.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://i.pinimg.com/736x/21/a1/7b/21a17be2e4f5b633049adb4ab696cf95.jpg",
    //   },

    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://i.pinimg.com/1200x/28/66/0b/28660b9753a3ea4758dcad3e6a85f7fb.jpg",
    //   },
    //   {
    //     details: "Essential beauty nails",
    //     price: "$300",
    //     name: "nails designs",
    //     item: "Add to cart",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1u_G86DDmc0Y1fgaXZbso3e7hUgBW4OHuMrSVsxAwY7hOQy3sli322onjgskySh-cTKk&usqp=CAU",
    //   },
    // ];
  const {dispatch} = useContext(EcommerceContext)
    const {category} = useParams()
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatcher = useDispatch()
  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
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
    <div className="CartConatiner">
      {/* <Header/> */}
      <div className="cartcontainerInner">
        <div className="Cart">
          <div className="upSec">
            <h5>Our Products</h5>
          </div>
          {loading ? (
            <div className="sectionCarts">Loading</div>


          ) : (
            <div className="sectionCarts">
              
              {item.map((e) => (
                <div className="boxes">
                  <div className="imgHolder">
                    <img src={e.image} alt="" className="pic" />
                  </div>
                  <div className="detailscontainer">
                    <p>{e.title}</p>
                    <p>{e.price}</p>
                    {/* <p>{e.description}</p> */}
                    {/* <p>{e.item}</p> */}
                    <button style={{ marginRight: "10px", color:"white" }} className='addTo-Carts'
                    onClick={()=>dispatcher(addToCart(e))}
                    >
                      {" "}
                      Add to carts
                    </button>
                    <button className='viewDetails'>
                      {" "}
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/review/${e.id}`}
                      >
                        view details
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart