import {React, useState, useEffect} from 'react'
import WrapperComponent from '../component/WrapperComponent'
import { mealPlans } from '../Component/nutritionPlans'
import NavBar from '../Component/NavBar'
export default function NutritionPage() {
  const [meals, setMeals] = useState({})
  useEffect(()=>{
    const menPlans = mealPlans.men.map((info, index)=>{
      return(
        <MealPlanContainer key={`mealPlan-${index}`}>
          <Details key={`detIndex-${index}`}>{
              info.details.map((detail, detIndex)=>{
              return <div key={`det-${detIndex}`}>{detail}</div>
            })
          }</Details>
         
          <Meals>
            {info.mealsPlan.map((meal, mealIndex)=>{
              return<li key={`mealIndex-${mealIndex}`}>{meal}</li>
            })}
          </Meals>
        </MealPlanContainer>
      )
    })
    const womenPlans = mealPlans.women.map((info, index)=>{
      return(
        <MealPlanContainer key={`womenPlanIndex${index}`}>
        <Details key={`detWomenIndex-${index}`}>{
          info.details.map((detail, wIndex)=>{
            return<div key={`wIndex-${wIndex}`}>{detail}</div>
          })
        }</Details>
          
          <Meals key={`mealsIndex-${index}`}>
            {info.mealsPlan.map((wDetail, mealIndex)=>{
              return <li key={`mealIndex-${mealIndex}`}>{wDetail}</li>
            })}
          </Meals>
        </MealPlanContainer>
      )
    })
    setMeals({men: menPlans, women: womenPlans})
  },[])
  return (
    <>
      <NavBar/>
      <WrapperComponent>
        <div id="mealPlansContainer">
          <div className="planContainer">
            <div className="planForGender">For Men</div>
            {meals.men}            
          </div>
          <div className="planContainer">
            <div className="planForGender">For Women</div>
            {meals.women}
          </div>
        </div>
      </WrapperComponent>
    </>
  )
}
const MealPlanContainer = ({children})=>{
  return(
    <div className="planMealBlock">
      {children}
    </div>
  )
}
const Details =({children})=>{
  return(
    <div className="personDetails">{children}</div>
  )
}
const Meals =({children})=>{
  return(<ul className="mealsContainer">{children}</ul>)
}