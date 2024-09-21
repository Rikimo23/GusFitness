import React from 'react'

export default function InputComponent({
    name,
    placeHolderText,
    type,
    limits = { min: 1, max: 100 },
    inputModeVal = "text",
  }){
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


  