import { React, useState, useEffect, useRef } from 'react'
import SignUpForm from "../Component/SignUpForm"
import BmiCalculator from "../Component/bmiCalculator"

export default function RegisterFormSetup({ exitButtonClicked = undefined }) {
    const [enabledForms, setEnabledForms] = useState({ signUp: false, bmiCalculator: true })
    const [newUserInfo, setNewUserInfo] = useState({ userName: "", password: "", email: "", bmi: 0 })
    const [signUpSubmitted, setSignUpSubmitted] = useState(false)
    const getUserInfo = (userInfo) => {
        setNewUserInfo(currentInfo => ({ ...currentInfo, ...userInfo }))
        setSignUpSubmitted(true)
    }
    const getBmiInfo = (bmiData) => {
        setNewUserInfo((currentData) => ({ ...currentData, ...{ bmi: bmiData.bmi } }))
        setEnabledForms((oldData) => ({ ...oldData, ...{ signUp: true, bmiCalculator: false } }))

    }
    const signUp = async () => {
        // console.log("sign up called")
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
            console.log(result)
            
            // const reader = response.body.getReader();
            // const decoder = new TextDecoder("utf-8");
            // let result = '';
            // let done = false;

            // while (!done) {
            //     const { value, done: doneReading } = await reader.read();
            //     done = doneReading;
            //     result += decoder.decode(value, { stream: !done });
            // }

            // console.log(JSON.parse(result));

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
