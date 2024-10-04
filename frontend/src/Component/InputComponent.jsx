import {React, useEffect, useState} from 'react'

export default function InputComponent({
    labelName,
    name,
    placeHolderText,
    type,
    limits = { min: 1, max: 100 },
    inputModeVal = "text",
    getValue
  }){
    const [formattedName, setFormattedName] = useState("")
    useEffect(()=>{
      if(name){
        setFormattedName(name.replace("-", " "))
      }
    },[name])
    
    return (
      <div className="inputComponent">
        <label>{labelName}</label>
        <input
          type={type}
          inputMode={inputModeVal}
          placeholder={placeHolderText}
          name={name}
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