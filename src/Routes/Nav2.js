import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Hollywood from "../Component/Hollywood";
import Bollywood from "../Component/Bollywood";
import Technology from "../Component/Technology";
import Fitness from "../Component/Fitness";
import Food from "../Component/Food";
import "./Route.css"
import StoreCompo from "../ContextCompo/ContextCompo";
import DynamicCompo from "./DynamicCompo";
import React, { useState } from 'react';
import Footer from "./Footer";


function Navbar(){
  const[count,setCount]=useState(false);

   

  return(
    <>

    <BrowserRouter>
    <div id="navlink">
    <ul>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/" className="link" >Home</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Hollywood" className="link" >Hollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Bollywood" className="link" >Bollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Technology"  className="link">Technology </NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Fitness"  className="link">Fitness</NavLink></li>
        <li>
        <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Food"  className="link">Food</NavLink></li>
        
</ul>
<div onClick={()=>setCount(!count)} className="display"><i className="fa-solid fa-bars"  ></i></div>



</div>

<div className={(count)?"hambergerlinks show":"hambergerlinks hide"}>
<ul>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} onClick={()=>setCount(!count)} to="/" className="link" >Home</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Hollywood" className="link" >Hollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Bollywood" className="link" >Bollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Technology"  className="link">Technology </NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Fitness"  className="link">Fitness</NavLink></li>
        <li>
        <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Food"  className="link">Food</NavLink></li>
        
</ul>
</div>

<StoreCompo>


<Routes>
 
 <Route path="/" element={<Home/>}/>
 <Route path="/Hollywood" element={<Hollywood/>}/>
 <Route path="/Bollywood" element={<Bollywood/>}/>
 <Route path="/Technology" element={<Technology/>}/>
 <Route path="/Fitness" element={<Fitness/>}/>
 <Route path="/Food" element={<Food/>}/>
 <Route path="/detail/:id" element={<DynamicCompo/>}/>

     
</Routes>
    
</StoreCompo>

    <Footer/>
    
    </BrowserRouter>

    </>
  )
}
export default Navbar