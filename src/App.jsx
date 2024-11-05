import React, { Children } from "react";
import Layout from "./Layout/Layout";
// import HomePageHolder from "./Home/HomePageHolder";
// import Cart from "./Header/Cart/Cart";
// import { createBrowserRouter } from "react-router-dom";
// import Header from "./Header/Header";
// import HomePage from "./Home/HomePage";
import AddToCart from "./AddToCart/AddToCart";
import Detailed from "./Detailed/Detailed";

// import Card from "./Card/Card";
// import NewCart from "./NewCart/NewCart";
// import { Review } from "./Review/Review";
// import ReviewCom from "./Detailed/Detailed";
// import Checkout from "./AddToCart/AddToCart";
// import AdminDashboard from "./Function";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./Header/Cart/Cart";

import HomePageHolder from "./Home/HomePageHolder";
import HomePage from "./Home/HomePage";
import { Review } from "./Review/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HomePage />
          </>
        ),
      },
      {
        path: "/victory/:category",
        element: (
          <>
            <Cart />
          </>
        ),
      },
      {
        path: "/cart",
        element: (
          <>
            <AddToCart />
          </>
        ),
      },
      {
        path: "/review/:id",
        element: (
          <>
          <Detailed/>
          </>
        )
      },

      {
        path: "/detailed",
        element:(
          <>
          <Review/>
          </>
        )
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

      {/* <Header/> */}
      {/* <HomePageHolder /> */}
      {/* <AdminDashboard /> */}
      {/* <Review/> */}
      {/* <Cart /> */}
      {/* <Product/> */}
      {/* <Category/> */}
      {/* <Card/> */}
      {/* <NewCart/> */}

      {/* <ReviewCom/> */}
      {/* <Checkout/> */}
    </div>
  );
};

export default App;
