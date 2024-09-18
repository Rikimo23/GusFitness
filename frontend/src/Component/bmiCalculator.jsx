import React from 'react'
import InputComponent from './InputComponent';
export default function BMIComponent() {
  return (
    <div id="bmiCalculator">
      <form action="/submit" method="post">
        <InputComponent
          type={"number"}
          name={"Age"}
          placeHolderText={"e.i 25"}
          inputModeVal="numeric"
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
            />
            <InputComponent
              type={"number"}
              name={"Inches"}
              placeHolderText={"e.i 10"}
              limits={{ min: 1, max: 12 }}
              inputMode={"numeric"}
            />
          </div>
        </div>
        <InputComponent
          type={"number"}
          name={"Weight"}
          placeHolderText={"e.i 140lbs"}
          limits={{ min: 1, max: 800 }}
        />
        <input id="submitButton" type="submit" value="Compute BMI"></input>
      </form>
    </div>
  );
}


