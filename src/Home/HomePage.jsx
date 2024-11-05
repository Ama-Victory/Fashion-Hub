import React, { useEffect, useState , useContext} from 'react'
import { EcommerceContext } from '../Api/contextApi';
import "./homepage.css"
// import "../assets/Nails"
import "./Mobile.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import load from "../assets/Loading_icon.gif"


const HomePage = () => {
  const {cart} =useContext(EcommerceContext);
  // console.log(useContext (EcommerceContext))

  const HomePage = [
     {
       image:
        "https://edited.beautybay.com/wp-content/uploads/2022/05/nailsby_gxx.jpg",
     },
    // {
    //   image:
    //     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSffufW3KjEFw-QwY-lph7IHHijVa5aa3JNkXkqADC4hdVFazs9bQawCED8DM8tr10h721attyqmMTI0I7aj6du6CmpNPrRoFRoYMoVH2-Z_TLEgrmsj5aSTw6TyZjGMr4FqyOCmgY&usqp=CAc",
    // },

    // {
    //   image:
    //      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSCZbfho76k-MFtFMyByc5O4zByGDfqeLFP1DRPDsvLH1SpVKss_IVAY1a8S_pKMeofKh5iP6FIQvcYoKoXsrZZoRactY6ad1JuTCB6zz61wgwmBle-tkFE_46mtvbX_I7PtFAR2R75ARM&usqp=CAc",
    // },
  ];

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () =>{
    try {
      setLoading(true)
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setItem(res?.data)
      setLoading(false)
      // console.log(res);
      console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories()
  }, [])
  

const Home = [{

  
        details: "Essential beauty nails",
        image:
          "https://i.pinimg.com/236x/3a/c9/0e/3ac90e8021cedaff66fb2c7875d5e9be.jpg",
      },

      {
        details: "Essential beauty nails",
        
        image:
          "https://glaminati.com/wp-content/uploads/2023/08/summer-nail-designs-try-july-rainbow-daisies.jpg",
      },

      {
        details: "Essential beauty nails",
       
        image:
          "https://edited.beautybay.com/wp-content/uploads/2022/05/nailsby_gxx.jpg",
      },

      {
        details: "Essential beauty nails",
       
        image:
          "https://i.pinimg.com/236x/3a/c9/0e/3ac90e8021cedaff66fb2c7875d5e9be.jpg",
      },

     

]
  
  return (
    <div className="homepageMain">
      <div className="homepageContainer">
        <div className="homepageContainerInner">
          <div className="info">
            <h1>Good Fashion Starts with a good nail</h1>
            <p>Fashion Deals with looking good</p>
            <button className="learnmoreButton">Learn more</button>
          </div>
        </div>
      </div>
      <div className="Categories">
        {loading ? (
          <img src={load} className="Categories"/>
          // <img src="" alt="" />
        ) : (
          <div className="Categories">
            {item.map((e) => (
              <div className="boxess">


                  {HomePage.map((text) =>(
                    <img src={text.image} alt="" />
                  ))}
                {/* <div className="imgHolder">
                  <img src={e.image} alt="" className="pic" />
                </div> */}
                <div className="detailscontainer">
                  <Link to={`/victory/${e}`} className="Gotopage">
                    {e}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage