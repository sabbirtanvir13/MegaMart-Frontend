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

import Shop from "../components/Shop/Shop";
import DashboardLayout from "../layout/DashboardLayout";
import AddProductForm from "../Form/AddProductForm";




export const router = createBrowserRouter([
  // ===== Main Layout =====
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
        element: <Coverage />,
        loader:()=>fetch('/servicesCenter.json').then(res=>res.json())
      },

     
       {
        path:'/shop',
        element:<Shop></Shop>
       
      }
    ],
  },

  //  Auth Layout //
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
          element: <Login />
      },
      {
        path: "register",
           element: <Register />
      },
    ],
  },


     // Dashboard Layout 
 {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    { path: "add-product", element: <AddProductForm /> },
  ],
}

     
]);
