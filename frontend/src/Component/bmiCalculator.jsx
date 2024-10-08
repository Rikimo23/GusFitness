import {React, useState, useEffect} from 'react'
import InputComponent from './InputComponent';
export default function BMIComponent({action}) {
  const [bmiInfo, setBmiInfo] = useState({feet: 0, inches:0, lbs: 0, age:0, bmi: 0})
  const [bmiUpdated, setBmiUpdated] = useState(false)

  // Gets the age to calculate the bmi, and updates the bmiInfo state
  const getAge =(age)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{age: age}})
    )
  }
  // Gets the feet to calculate the bmi, and updates the bmiInfo state
  const getFeet =(feet)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{feet: feet}})
    )
  }
  // Gets the inches to calculate the bmi, and updates the bmiInfo state
  const getInches =(inches)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{inches: inches}})
    )
  }
  // Gets the pounds to calculate the bmi, and updates the bmiInfo state
  const getLbs =(lbs)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{lbs: lbs}})
    )
  }
  // Converts pounds to kilograms, and updates the bmiInfo state
  const lbsToKilograms=(lbs)=>{
    const kbMultiplier = 0.45359237
    const kilograms = kbMultiplier * lbs
    return kilograms
  }
  // Converts feet to meters, and updates the bmiInfo state
  const feetToMeters =(feet)=>{
    const meterMultiplier = 0.3048
    const meters = feet * meterMultiplier
    return meters 
  }
  // Converts inches to meters, and updates the bmiInfo state
  const inchesToMeters =(inches)=>{
    const meterMultiplier = 0.0254
    const meters = inches * meterMultiplier
    return meters 
  }
  // Calculates the bmi and updates the bmiInfo state
  const getBMI=(e)=>{
    e.preventDefault()    
    const convertedMeters = feetToMeters(bmiInfo.feet)+inchesToMeters(bmiInfo.inches)
    const finalBmi = (lbsToKilograms(bmiInfo.lbs) / (Math.pow(convertedMeters, 2))).toFixed(1)
    setBmiInfo((currentInfo)=>({...currentInfo, bmi: finalBmi}))   
    setBmiUpdated(true)
  }
  // This useEffect hook sends the bmi data to the parent component using the action function
  useEffect(()=>{
    if(bmiUpdated){
      if(action !== undefined){
        action(bmiInfo.bmi)
        console.log(`bmi has updated from the bmi calculator ${bmiInfo.bmi}`)
      }
    }
  },[bmiUpdated, action, bmiInfo.bmi])

  return (
    <div id="bmiCalculator">
      <h1>BMI Calculator</h1>
      <form onSubmit={getBMI} method="post">
        <InputComponent
          labelName={"Age"}
          type={"number"}
          name={"age"}
          placeHolderText={"e.i 25"}
          inputModeVal="numeric"
          getValue ={getAge}          
        />
        <div id="heightPart">
          <span>Height</span>
          <div id="heightCombo">
            <InputComponent
              labelName={"Feet"}
              type={"number"}
              name={"feet"}
              placeHolderText={"e.i 5"}
              limits={{ min: 1, max: 10 }}
              inputMode={"numeric"}
              getValue ={getFeet}
            />
            <InputComponent
              type={"number"}
              labelName={"Inches"}
              name={"inches"}
              placeHolderText={"e.i 10"}
              limits={{ min: 0, max: 12 }}
              inputMode={"numeric"}
              getValue ={getInches}
            />
          </div>
        </div>
        <InputComponent
          type={"number"}
          name={"weight"}
          labelName={"Weight"}
          placeHolderText={"e.i 140lbs"}
          limits={{ min: 1, max: 800 }}
          getValue ={getLbs}
        />
        <input id="submitButton" type="submit" value="Compute BMI"></input>
      </form>
        <span id="yourBMIText"><b>Your BMI Is: {bmiInfo.bmi}</b></span>
    </div>
  );
}

