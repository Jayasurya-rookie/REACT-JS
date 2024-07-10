import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import Indexpage from './Page/Indexpage';
import Login from "./Page/login";
import Home from "./Page/home";




import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './Page/registration';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Indexpage />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="home" element={<Home />} />
 
   
    
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


