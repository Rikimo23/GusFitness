import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import HealthOptionsContainer from "../component/HealthOptionsContainer"
export default function NavBar({ navigationLinks }) {
  const [subOptionsEnabled, setSubOptionsEnabled] = useState(false)
  const restoreScrolling =()=>{
       document.body.style.overflowY = 'auto';
       document.body.style.height= 'unset';
  }
  useEffect(()=>{
    restoreScrolling()
  },[])
  return (
    <div id="navbarContainer">
      <div id="logoName"><a href="/">Gus Gym & Fitness</a></div>
      <div id="navBarOptions">
        <ul>
          <li><NavLink to="/" className={({isActive})=>{return isActive? "activeNavbarElement":""}}>Home</NavLink></li>
          <li onMouseEnter={()=> setSubOptionsEnabled(true)}
              onFocus={()=> setSubOptionsEnabled(true)}              
          >
            <NavLink >Health</NavLink>
            {subOptionsEnabled && <HealthOptionsContainer mouseExit={setSubOptionsEnabled}/>}
          </li>
          <li ><NavLink to="/contactus" className={({isActive})=>{return isActive? "activeNavbarElement":""}}>Contact Us</NavLink></li>
          <li ><NavLink to="/signin" className={({isActive})=>{return isActive? "activeNavbarElement":""}}>Sign In</NavLink></li>
          <li ><NavLink to="/signup" className={({isActive})=>{return isActive? "activeNavbarElement":""}}>Sign Up</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
