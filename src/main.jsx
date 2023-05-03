import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Login from './Components/Login/Login.jsx';
import ViewRecipee from './Components/ViewRecipee/ViewRecipee.jsx';
import ErrorPage from './Components/404/ErrorPage.jsx';
import Authprovider from './providers/AuthProvider.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Registration from './Components/Resgistration/Registration.jsx';
import PrivateRoute from './Components/PrivateRote/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path :"/register",
        element : <Registration></Registration>
      },
      {
        path:"/recipe/:id",
        element: <PrivateRoute><ViewRecipee></ViewRecipee></PrivateRoute>,
        loader : ({params}) => fetch(`https://chef-recipe-hunter-server-side-afridimhrj10-gmailcom.vercel.app/chef/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
