import {React, useState, useEffect} from 'react'
import InputComponent from './InputComponent';
export default function BMIComponent({action}) {
  const [bmiInfo, setBmiInfo] = useState({feet: 0, inches:0, lbs: 0, age:0, bmi: 0})
  const [bmiUpdated, setBmiUpdated] = useState(false)

  console.log(action)
  console.log(bmiInfo)
  const getAge =(age)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{age: age}})
    )
  }
  const getFeet =(feet)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{feet: feet}})
    )
  }
  const getInches =(inches)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{inches: inches}})
    )
  }
  const getLbs =(lbs)=>{
    setBmiInfo(
      (currentData)=>({...currentData, ...{lbs: lbs}})
    )
  }
  const lbsToKilograms=(lbs)=>{
    const kbMultiplier = 0.45359237
    const kilograms = kbMultiplier * lbs
    return kilograms
  }
  const feetToMeters =(feet)=>{
    const meterMultiplier = 0.3048
    const meters = feet * meterMultiplier
    return meters 
  }
  const inchesToMeters =(inches)=>{
    const meterMultiplier = 0.0254
    const meters = inches * meterMultiplier
    return meters 
  }
  const getBMI=(e)=>{
    const convertedMeters = feetToMeters(bmiInfo.feet)+inchesToMeters(bmiInfo.inches)
    const finalBmi = (lbsToKilograms(bmiInfo.lbs) / (Math.pow(convertedMeters, 2))).toFixed(1)
    setBmiInfo((currentInfo)=>({...currentInfo, ...{bmi: finalBmi}}))   
    setBmiUpdated(true)
    e.preventDefault()    
  }
  useEffect(()=>{
    if(bmiUpdated){
      if(action !== undefined){
        action({bmi: bmiInfo.bmi})
        console.log(`bmi has updated from the bmi calculator ${bmiInfo.bmi}`)
      }
    }
  },[bmiUpdated])

  return (
    <div id="bmiCalculator">
      <h1>BMI Calculator</h1>
      <form onSubmit={getBMI} method="post">
        <InputComponent
          type={"number"}
          name={"Age"}
          placeHolderText={"e.i 25"}
          inputModeVal="numeric"
          getValue ={getAge}          
        />
        <div id="heightPart">
          <span>Height</span>
          <div id="heightCombo">
            <InputComponent
              type={"number"}
              name={"Feet"}
              placeHolderText={"e.i 5"}
              limits={{ min: 1, max: 10 }}
              inputMode={"numeric"}
              getValue ={getFeet}
            />
            <InputComponent
              type={"number"}
              name={"Inches"}
              placeHolderText={"e.i 10"}
              limits={{ min: 0, max: 12 }}
              inputMode={"numeric"}
              getValue ={getInches}
            />
          </div>
        </div>
        <InputComponent
          type={"number"}
          name={"Weight"}
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

