import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./Pages/Registration";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Customer from "./Pages/customerhome";
import Admin from "./Pages/adminhome";
import ViewSongs from "./Pages/viewsongs";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}> </Route >

      <Route path="/login" element={<Login />}>
      </Route>

      <Route path="/registration" element={<Registration />}>
      </Route>

      <Route path="/customerhome" element={<Customer/>}></Route>
      <Route path="/adminhome" element={<Admin/>}></Route>
      <Route path="/viewsongs" element={<ViewSongs/>}></Route>



      </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
