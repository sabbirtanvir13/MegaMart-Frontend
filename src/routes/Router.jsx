// import { createBrowserRouter } from "react-router";

// import RootLayout from "../layout/RootLayout";
// import Home from "../pages/home/Home";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//       },
//     ],

//  {
//     path: '/',
//     Component: AuthLayout,
//     children: [
//       {
//         path: '/login',
//         Component: Login
//       },
//       {
//         path: '/register',
//         Component: Register
//       },
     
//     ]
//   },


//   },
// ]);

     



import { createBrowserRouter } from "react-router";

import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";

import Home from "../pages/home/Home";
import Login from "../Auth/login/Login";
import Register from "../Auth/register/Register";
import Coverage from "../pages/Coverage/Coverage";
import AddProductForm from "../Form/AddProductForm";
import Shop from "../components/Shop/Shop";


export const router = createBrowserRouter([
  // ===== Main Website Layout =====
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },


       {
        path:'/coverage',
        Component: Coverage,
        loader:()=>fetch('/servicesCenter.json').then(res=>res.json())
      },

       {
        path:'/addProduct',
        element:<AddProductForm></AddProductForm>,
       
      },
       {
        path:'/shop',
        element:<Shop></Shop>
       
      }
    ],
  },

  // ===== Auth Layout =====
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
