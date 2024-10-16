import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import HealthOptionsContainer from "../Component/HealthOptionsContainer"
import DropDownMenu from "../Component/DropDownMenu"
import { useNavigate } from "react-router-dom"
import getUsers from '../Component/getUsers';
export default function NavBar({ navigationLinks }) {
  const [pageLoaded, setPageLoaded] = useState(false)
  const [optionsObject, setOptionsObject] = useState({ subOptionsEnabled: false, signedIn: localStorage.getItem("loggedIn"), profileSubMenuEnabled: false })
  const navigate = useNavigate()

  //the health option in the navigation bar uses this to display all the sub options
  const setSubOptionsEnabled = (isEnabled) => {
    setOptionsObject((oldObject) => ({ ...oldObject, ...{ subOptionsEnabled: isEnabled, profileSubMenuEnabled: false } }))
  }
  //sets the profile menu on and off
  const setProfileSubOptions = (isEnabled) => {
    setOptionsObject((oldObject) => ({ ...oldObject, ...{ subOptionsEnabled: false, profileSubMenuEnabled: isEnabled } }))
  }
  //these functions are used by the profile menu suboptions
  const funs = [
    () => {
      setOptionsObject((oldObj) => ({ ...oldObj, ...{ signedIn: false } }))
      //keeps the data available to the client so that we are able to log out the user.
      localStorage.setItem('loggedIn', false)
      navigate("/")
    },
    () => {
      
      setOptionsObject((oldObj) => ({ ...oldObj, ...{ signedIn: false } }))
      if (getUsers() !== -1) {
        //deletes the user we call for, in this case, the user with id #4 

        const deleteUser = async () => {
          const userId = localStorage.getItem("userId")
          const url = `http://localhost:8081/api/users/${userId}`;

          try {
            const response = await fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            });

            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            let result;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                result = await response.json();
            } else {
                result = await response.text();
            }
            // update the userId variable to make sure it doesn't stay for the next time someone tries to access it
            localStorage.setItem("userId", undefined)
            console.log("Profile Deleted")
        
          } catch (error) {
            console.error('There was a problem with the delete request:', error);
          }
        }
        deleteUser()
      }
      navigate("/")
      //logs the user out
      localStorage.setItem('loggedIn', false)
    }
  ]

  const menuOptions = "Sign Out,Delete".split(",")
  useEffect(() => {
    //this turns the userSigned in into a boolean value to check for later
    const userSignedIn = localStorage.getItem('loggedIn') === "true"
    if (localStorage.getItem('loggedIn') === null) {
      localStorage.setItem('loggedIn', false)
    } else {
      if (userSignedIn) {
        setOptionsObject((oldObj) => ({ ...oldObj, ...{ signedIn: userSignedIn, } }))
      }
      else setOptionsObject((oldObj) => ({ ...oldObj, ...{ signedIn: userSignedIn } }))
    }
    console.log(`user status - Signed in: ${userSignedIn}`)

  }, [])
  return (
    <div id="navbarContainer">
      <div id="logoName"><a href="/">Gus Gym & Fitness</a></div>
      <div id="navBarOptions">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => { return isActive ? "activeNavbarElement" : "" }}>Home</NavLink></li>
          <li onMouseEnter={() => setSubOptionsEnabled(true)}
            onFocus={() => setSubOptionsEnabled(true)}
          >
            <NavLink >Health</NavLink>
            {optionsObject.subOptionsEnabled && <HealthOptionsContainer mouseExit={setSubOptionsEnabled} />}
          </li>
          <li ><NavLink to="/contactus" className={({ isActive }) => { return isActive ? "activeNavbarElement" : "" }}>Contact Us</NavLink></li>
          {/* Using conditional rendering to only display these two options when the user is not logged in */}
          {!optionsObject.signedIn && <li ><NavLink to="/signin" className={({ isActive }) => { return isActive ? "activeNavbarElement" : "" }}>Sign In</NavLink></li>}
          {!optionsObject.signedIn && <li ><NavLink to="/signup" className={({ isActive }) => { return isActive ? "activeNavbarElement" : "" }}>Sign Up</NavLink></li>}
          {/* Display the signedIn component and its children only when signed in */}
          {optionsObject.signedIn && <SignInComponent mouseEntered={setProfileSubOptions}>
            {optionsObject.profileSubMenuEnabled && <DropDownMenu
              mouseExit={setProfileSubOptions}
              menuOptions={menuOptions}
              optionsFunctions={funs}
            />}
          </SignInComponent>}
        </ul>
      </div>
    </div>
  )
}

const SignInComponent = ({ mouseEntered, children }) => {
  return (
    <li onMouseEnter={() => mouseEntered(true)}>
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C9.56586 3 7.59259 4.95716 7.59259 7.37143C7.59259 9.7857 9.56586 11.7429 12 11.7429C14.4341 11.7429 16.4074 9.7857 16.4074 7.37143C16.4074 4.95716 14.4341 3 12 3Z" fill="currentColor" />
        <path d="M14.601 13.6877C12.8779 13.4149 11.1221 13.4149 9.39904 13.6877L9.21435 13.7169C6.78647 14.1012 5 16.1783 5 18.6168C5 19.933 6.07576 21 7.40278 21H16.5972C17.9242 21 19 19.933 19 18.6168C19 16.1783 17.2135 14.1012 14.7857 13.7169L14.601 13.6877Z" fill="currentColor" />
      </svg>
      {children}
    </li>
  )
}
