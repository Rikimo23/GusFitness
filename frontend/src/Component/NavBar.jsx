import React from 'react'

export default function NavBar({navigationLinks}) {
  return (
    <div id="navbarContainer">
        <div id="logoName"><a href="/">Gus Gym & Fitness</a></div>
        <div id="navBarOptions">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Health</a></li>
                <li><a href="./contactus">Contact Us</a></li>
                <li><a href="/glossary">Glossary Index</a></li>
                <li><a href="/">Sign In/ Sign Up</a></li>
            </ul>
        </div>
    </div>
  )
}
