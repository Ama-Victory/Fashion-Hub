// import React, { useState } from "react";
// import ReviewCom from "./Detailed/Detailed";
// import Checkout from "./AddToCart/AddToCart";
// import Header from "./Header/Header";
// import HomePageHolder from "./Home/HomePageHolder";

// const AdminDashboard = () => {
//   const [review, setReview] = useState(false);
//   const [checkout, setcheckout] = useState(false);
//   const [home, setHome] = useState(true);

//   const handleReview = () => {
//     setReview(true);
//     setcheckout(false);
//     setHome(false);
    // alert("this is review");
//   };

//   const handleCheckout = () => {
//     setReview(false);
//     setcheckout(true);
//     setHome(false);
//     // alert("this is checkout");
//   };

//   const handleHome = () => {
//     // alert("this is homepage");
//     setReview(false);
//     setcheckout(false);
//     setHome(true);
//   };

//   return (
//     <div className="">
//       <div className="">
//         <Header
//           handleReview={handleReview}
//           handleCheckout={handleCheckout}
//           handleHome={handleHome}
//         />
//         {home ? (
//           <HomePageHolder />
//         ) : review ? (
//           <ReviewCom />
//         ) : checkout ? (
//           <Checkout />
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
