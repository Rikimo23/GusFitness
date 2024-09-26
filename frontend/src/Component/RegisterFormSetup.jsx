import {React, useState, useEffect, useRef} from 'react'
import SignUpForm from "../Component/SignUpForm"
import BmiCalculator from "../Component/bmiCalculator"

export default function RegisterFormSetup({exitButtonClicked}) {
    const [enabledForms, setEnabledForms] = useState({signUp: true, bmiCalculator: false})
    const [newUserInfo, setNewUserInfo] = useState({userName:"", password:"", email: "", bmiInfo:{age: 0, height: 0, weight: 0, bmiRange: 0}})
    const buttonRef = useRef(null)
    const getUserInfo =(userInfo)=>{
        setNewUserInfo(userInfo)
        setEnabledForms((oldData)=>({...oldData, ...{signUp: false, bmiCalculator: true}}))
    }
    const getBmiInfo =(bmiData)=>{
        setNewUserInfo((currentData)=>({...currentData, ...{
       bmiInfo:{age: bmiData.age, height: bmiData.height, weight: bmiData.weight, bmiRange: bmiData.bmiRange}   
    //    try{
    //     //endpoint post logic 
    //    }    
    //    catch(e){
    //     // handle errors
    //    }
    }}))
    }
    const container = useRef(null)
    useEffect(()=>{
        if(container.current) container.current.focus()
    },[])
    useEffect(()=>{
        // alert(`user info: ${newUserInfo}`)
        console.table(newUserInfo)
    },[newUserInfo])
  return (
    <div id="registrationFormSetupContainer"
        ref={container}
        onFocus={()=>{
            document.body.style.overflowY = 'hidden';
            document.body.style.height = "100%"
        }}
        onKeyDown={(e)=>{
            if(e.key === "Escape") 
            {
                if(buttonRef.current) buttonRef.current.click()
            }
        }}
        tabIndex={0}
    >
        <div>
            {enabledForms.signUp && <SignUpForm action={getUserInfo}/>}
            {enabledForms.bmiCalculator && <BmiCalculator action={getBmiInfo}/>}
        </div>
        <button 
        onClick={exitButtonClicked}
        ref = {buttonRef}
        >X</button>
    </div>
  )
}
