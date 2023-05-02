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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        path:"/recipe/:id",
        element: <ViewRecipee></ViewRecipee>,
        loader : ({params}) => fetch(`https://chef-recipe-hunter-server-side-afridimhrj10-gmailcom.vercel.app/chef/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
