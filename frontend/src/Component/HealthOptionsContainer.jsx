import {React, useState} from 'react'
import { NavLink } from "react-router-dom";
export default function HealthOptionsContainer({mouseExit}) {
  const [mouseEntered, setMouseEntered] = useState(false)
  return (
    <div id="healthOptionsContainer"
      onMouseEnter={()=>setMouseEntered(true)}
      onMouseLeave={()=>{
          if(mouseEntered)
          {
            setMouseEntered(false)
            mouseExit(false)
          }
        }
      }
    >       
      <NavLink to="/bmi" className={({isActive})=>{return isActive? "healthOptionActive":""}}>BMI</NavLink>
      <NavLink to="/tutorials" className={({isActive})=>{return isActive? "healthOptionActive":""}}>Tutorials</NavLink>
      <NavLink to="/musclegroupsandworkoutplan" className={({isActive})=>{return isActive? "healthOptionActive":""}}>Muscle Groups & Workout Plan</NavLink>
      <NavLink to="/nutritionandmealplan" className={({isActive})=>{return isActive? "healthOptionActive":""}}>Nutrition & Meal Plans</NavLink>
      <NavLink to="/tracker" className={({isActive})=>{return isActive? "healthOptionActive":""}}>Tracker</NavLink>
      <NavLink to="/glossary" className={({isActive})=>{return isActive? "healthOptionActive":""}}>Glossary</NavLink>
    </div>
  )
}
