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
        const allInfo = {...userInfo, ...newUserInfo}
        console.table(newUserInfo)
        setNewUserInfo(currentInfo => ({ ...currentInfo, ...allInfo }))
        console.log('heres the new user info')
        console.table(allInfo)
        signUp(allInfo)
        // setSignUpSubmitted(true)
    }
    //get the bmiInfo from the bmi calculator
    const getBmiInfo = (bmiData) => {
        setNewUserInfo((currentData) => ({ ...currentData, bmi: bmiData}))        
        // register the user only after submitting the sign up form
        if(!signUpSubmitted)
        {
            // setTimeout(()=>{
                setEnabledForms((oldData) => ({ ...oldData, ...{ signUp: true, bmiCalculator: false } })) 
                // setNewUserInfo((currentData) => ({ ...currentData, ...{bmi: bmiData}}))                
            // }, 1500)
           
        }
    }
    const signUp = async (userInfo) => {
        console.log("sign up called")
        console.table(userInfo)
        // try{
        //     const usersAmountResponse = await fetch("http://localhost:8081/api/users/count") 
        //     let usersAmount = 0
        //     if(!usersAmountResponse.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
        //     else{
        //         usersAmount = await usersAmountResponse.json()
        //         console.log(`amount of users: ${usersAmount}`)
        //     }
        // }catch(err){console.error(err)}
        getUsers()

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
                localStorage.setItem("loggedIn", "true")
                setSignUpSubmitted(true)            
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
