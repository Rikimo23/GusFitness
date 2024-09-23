import React from 'react'

export default function InputComponent({
    name,
    placeHolderText,
    type,
    limits = { min: 1, max: 100 },
    inputModeVal = "text",
    getValue
  }){
    return (
      <div className="inputComponent">
        <label>{name}</label>
        <input
          type={type}
          inputMode={inputModeVal}
          placeholder={placeHolderText}
          min={limits.min}
          max={limits.max}
          required
          onChange={(e) => {
            
            if(type==="number"){
              if (e.currentTarget.value > limits.max){
                e.currentTarget.value = limits.max;
              }
              const val = Math.floor(e.currentTarget.value)
              e.currentTarget.value = val
            }
            getValue(e.currentTarget.value)
          }}
        />
      </div>
    );
  };