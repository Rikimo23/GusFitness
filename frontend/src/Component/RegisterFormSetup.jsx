import { React, useState, useEffect, useRef } from 'react'
import SignUpForm from "../Component/SignUpForm"
import BmiCalculator from "../Component/bmiCalculator"
import getUsers from "../Component/getUsers"
import {useNavigate} from 'react-router-dom'
export default function RegisterFormSetup({ exitButtonClicked = undefined}) {
    const [enabledForms, setEnabledForms] = useState({ signUp: false, bmiCalculator: true })
    const [newUserInfo, setNewUserInfo] = useState({ userName: "", password: "", email: "", bmi: 0 })
    const [signUpSubmitted, setSignUpSubmitted] = useState(false) 
    const navigate = useNavigate()
    //Fetch the user data from the sign up form
    const getUserInfo = (userInfo) => {
        const allInfo = {...newUserInfo, ...userInfo}
        console.table(newUserInfo)
        setNewUserInfo(currentInfo => ({ ...currentInfo, ...allInfo }))
        console.log('heres the new user info')
        console.table(allInfo)
        signUp(allInfo)
    }
    //get the bmiInfo from the bmi calculator
    const getBmiInfo = (bmiData) => {
        setNewUserInfo((currentData) => ({ ...currentData, bmi: bmiData}))        
        // register the user only after submitting the sign up form
        if(!signUpSubmitted)
        {
            setEnabledForms((oldData) => ({ ...oldData, ...{ signUp: true, bmiCalculator: false } }))
        }
    }
    const signUp = async (userInfo) => {
        console.log("sign up called")
        console.table(userInfo)
        const amountOfUsers = getUsers()

        try {
            
            const response = await fetch("http://localhost:8081/api/users/register", {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
            else{
                const result = await response.json();

                // update the loggedIn variable in the local storage
                localStorage.setItem("loggedIn", "true")
                // update the user Id in the local storage
                localStorage.setItem("userId", amountOfUsers + 1)
                setSignUpSubmitted(true)            
                console.log(`amount of users before updating it: ${amountOfUsers}`)
                console.log(`amount of users after updating it: ${amountOfUsers+1}`)
                console.log(result) 
            }
        } catch (error) { console.error(error);}
    }

    return (
        <div id="registrationFormSetupContainer"
            tabIndex={0}
        >
            <div>
                {enabledForms.bmiCalculator && <BmiCalculator action={getBmiInfo} />}
                {enabledForms.signUp && <SignUpForm action={getUserInfo} />}
            </div>
        </div>
    )
}
