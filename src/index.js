import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/homepage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/homepage';
import ProfilePage from './pages/profilepage';
import Login from './pages/login';
import GetRequests from './pages/getrequest';
import AddRequest from './pages/addRequest';
import UpdateRequest from './pages/updaterequest';
import AllSiding from './pages/allsiding';
import Notifications from './pages/notification';
const router =createBrowserRouter([
  {
    path:'/',
    element :<Login></Login>

  },
  {
    path:'/myprofile',
    element:<ProfilePage></ProfilePage>
  },
  {
    path:'/home',
    element:<HomePage/>
  },
  {
    path:'/request',
    element:<GetRequests/>
  },
  {
    path:'/addRequest',
    element:<AddRequest/>
  },
  {
    path:'/updateRequest/:id',
    element:<UpdateRequest/>
  },
  {
    path:'/allsiding',
    element:<AllSiding/>
  },
  {
    path:'/activity/:id',
    element:<Notifications/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

