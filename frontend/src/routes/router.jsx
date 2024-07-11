import React from 'react'; // Add this import

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import ForgetPassword from '../pages/Forget-password';
import Signup from '../pages/Signup';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducts from '../pages/AllProducts';
import ProductDetails from '../pages/ProductDetails';
import ProductCategory from '../helper/ProductCategory';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import CategoryProduct from '../pages/CategoryProduct';
import Success from '../pages/Success';
import Cancel from '../pages/Cancel';
import Order from '../pages/Order';




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Homepage/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <Signup/>,
        },
        {
          path: "/product-category",
          element: <CategoryProduct/>,
        },
        {
          path: "product/:id",
          element: <ProductDetails/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/success",
          element: <Success/>,
        },
        {
          path: "/cancel",
          element: <Cancel/>,
        },
        {
          path: "/order",
          element: <Order/>,
        },





        {
          path: "/search",
          element: <SearchProduct/>,
        },


        
 
         {
          path: "/Admin-panel",
          element: <AdminPanel/>,
          children : [
            {
                path : "all-users",
                element : <AllUsers/>
            },
            {
                path : "all-products",
                element : <AllProducts/>
            }
        ]

        },  {
          path: "/forget-password",
          element: <ForgetPassword/>,
        },  {
          path: "/forget-password",
          element: <ForgetPassword/>,
        },
    ]
}
]);

export default router;


  