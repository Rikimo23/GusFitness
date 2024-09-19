import React from 'react'
import { Link } from "react-router-dom";
export default function NavBar({navigationLinks}) {
  return (
    <div id="navbarContainer">
        <div id="logoName"><a href="/">Gus Gym & Fitness</a></div>
        <div id="navBarOptions">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Health</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/glossary">Glossary</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </div>
    </div>
  )
}
