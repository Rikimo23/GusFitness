import { React, useState, useEffect, useRef } from 'react'
import SignUpForm from "../Component/SignUpForm"
import BmiCalculator from "../Component/bmiCalculator"
import {useNavigate} from 'react-router-dom'
export default function RegisterFormSetup({ exitButtonClicked = undefined}) {
    const [enabledForms, setEnabledForms] = useState({ signUp: false, bmiCalculator: true })
    const [newUserInfo, setNewUserInfo] = useState({ userName: "", password: "", email: "", bmi: 0 })
    const [signUpSubmitted, setSignUpSubmitted] = useState(false) 
    const navigate = useNavigate()
    const getUserInfo = (userInfo) => {
        setNewUserInfo(currentInfo => ({ ...currentInfo, ...userInfo }))
        setSignUpSubmitted(true)
    }
    const getBmiInfo = (bmiData) => {
        setNewUserInfo((currentData) => ({ ...currentData, ...{ bmi: bmiData.bmi } }))        
        
        if(!signUpSubmitted)
        {
            setTimeout(()=>{
                setEnabledForms((oldData) => ({ ...oldData, ...{ signUp: true, bmiCalculator: false } }))
                setSignUpSubmitted(true)
            }, 1500)
           
        }
    }
    const signUp = async () => {
        console.log("sign up called")
        try {
            const response = await fetch("http://localhost:8081/api/users/register", {
                method: "POST",
                body: JSON.stringify(newUserInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
            const result = await response.json();
            localStorage.setItem("loggedIn", "true")
            navigate('/bmi')
            console.log(result) 
        } catch (error) { console.error(error);}
    }

    useEffect(() => {
        // console.clear()
        // console.log(`user name: ${newUserInfo.userName} password: ${newUserInfo.password}, email: ${newUserInfo.email} bmi: ${newUserInfo.bmi}`)
        if (signUpSubmitted) signUp()
    }, [newUserInfo, signUpSubmitted])
    return (
        <div id="registrationFormSetupContainer"
            tabIndex={0}
        >
            <div>
                {enabledForms.signUp && <SignUpForm action={getUserInfo} />}
                {enabledForms.bmiCalculator && <BmiCalculator action={getBmiInfo} />}
            </div>
        </div>
    )
}
