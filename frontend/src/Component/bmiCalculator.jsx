import React from 'react'
export default function BMIComponent() {
  return (
    <div id="bmiCalculator">
      <form action="/submit" method="post">
        <InputComponent
          type={"text"}
          name={"Age"}
          placeHolderText={"e.i 25"}
          inputModeVal="numeric"
        />
        <div id="heightPart">
          <span>Height</span>
          <div id="heightCombo">
            <InputComponent
              type={"text"}
              name={"Feet"}
              placeHolderText={"e.i 5"}
              limits={{ min: 1, max: 10 }}
              inputMode={"numeric"}
            />
            <InputComponent
              type={"text"}
              name={"Inches"}
              placeHolderText={"e.i 10"}
              limits={{ min: 1, max: 12 }}
              inputMode={"numeric"}
            />
          </div>
        </div>
        <InputComponent
          type={"text"}
          name={"Weight"}
          placeHolderText={"e.i 140lbs"}
          limits={{ min: 1, max: 800 }}
        />
        <input id="submitButton" type="submit" value="Compute BMI"></input>
      </form>
    </div>
  );
}

const InputComponent = ({
  name,
  placeHolderText,
  type,
  limits = { min: 1, max: 100 },
  inputModeVal = "text",
}) => {
  return (
    <div className="inputComponent">
      <label>{name}</label>
      <input
        type={type}
        inputMode={inputModeVal}
        placeHolder={placeHolderText}
        min={limits.min}
        max={limits.max}
        required
        onChange={(e) => {
          if (e.currentTarget.value > limits.max) {
            e.currentTarget.value = limits.max;
          }
        }}
      ></input>
    </div>
  );
};
