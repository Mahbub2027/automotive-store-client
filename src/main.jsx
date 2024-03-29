import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/pages/Home/Home';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import AuthProvider from './components/provider/AuthProvider';
import ErrorPage from './components/ErrorPage';
import AddProduct from './components/pages/AddProduct/AddProduct';
import BrandProduct from './components/pages/BrandProduct/BrandProduct';
import PrivateRoute from './components/Route/PrivateRoute';
import UpdateProduct from './components/pages/UpdateProduct/UpdateProduct';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/brandProduct/:id',
        element: <BrandProduct></BrandProduct>,
        loader: () => fetch(`http://localhost:5000/products`)
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
