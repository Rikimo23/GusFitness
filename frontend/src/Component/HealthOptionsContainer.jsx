import { React, useState, useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import intersectingRect from '../Component/intersectingRect'
export default function HealthOptionsContainer({ mouseExit }) {
  const [mouseEntered, setMouseEntered] = useState(false)
  const container = useRef(null)
  /* This useEffect hook is used for checking if the mouse has entered the element using its bounding box. 
    This way we can make sure we're closing the menu when it's not being hovered/used.*/
  useEffect(() => {   
    const leftClicked = (e) => {
      // if the mouse is no longer intersecting the menu element, set mouseEntered and mouseExit to false
      if (container.current &&
        !intersectingRect(container.current.getBoundingClientRect(), { x: e.clientX, y: e.clientY })) {
        setMouseEntered(false)
        mouseExit(false)
      }
    }
    window.addEventListener('mousedown', leftClicked)

    return () => {
      window.removeEventListener('mousedown', leftClicked)
    }

  }, [])
  return (
    <div className="healthOptionsContainer"
      ref={container}
        onMouseEnter={(e) => setMouseEntered(true)}
        onMouseLeave={() => {
          if (mouseEntered) {
            setMouseEntered(false)
            mouseExit(false)
          }
        }
      }
    >
      <NavLink to="/bmi" className={({ isActive }) => { return isActive ? "healthOptionActive" : "" }}>BMI</NavLink>
      <NavLink to="/tutorials" className={({ isActive }) => { return isActive ? "healthOptionActive" : "" }}>Tutorials</NavLink>
      <NavLink to="/nutritionandmealplan" className={({ isActive }) => { return isActive ? "healthOptionActive" : "" }}>Nutrition & Meal Plans</NavLink>
      <NavLink to="/tracker" className={({ isActive }) => { return isActive ? "healthOptionActive" : "" }}>Tracker</NavLink>
      <NavLink to="/glossary" className={({ isActive }) => { return isActive ? "healthOptionActive" : "" }}>Glossary</NavLink>
    </div>
  )
}
