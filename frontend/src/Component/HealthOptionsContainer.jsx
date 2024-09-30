import { React, useState, useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
export default function HealthOptionsContainer({ mouseExit }) {
  const [mouseEntered, setMouseEntered] = useState(false)
  const container = useRef(null)
  useEffect(() => {
    const intersectingRect = (rect, point) => {
      return (rect.left <= point.x && rect.right >= point.x && rect.top <= point.y && rect.bottom >= point.y)
    }
    const leftClicked = (e) => {
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
