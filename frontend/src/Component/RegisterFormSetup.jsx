import { React, useState, useEffect, useRef } from 'react'
import SignUpForm from "../Component/SignUpForm"
import BmiCalculator from "../Component/bmiCalculator"

export default function RegisterFormSetup({ exitButtonClicked=undefined }) {
    const [enabledForms, setEnabledForms] = useState({ signUp: false, bmiCalculator: true })
    const [newUserInfo, setNewUserInfo] = useState({ userName: "", password: "", email: "", bmiInfo: { age: 0, height: 0, weight: 0, bmi: 0 } })
    const [bmiValue, setBmiValue] = useState(0)
    const buttonRef = useRef(null)
    const getUserInfo = (userInfo) => {
        setNewUserInfo(userInfo)        
    }
    const getBmiInfo = (bmiData) => {
        const passedBmi = bmiData.bmi

        setNewUserInfo((currentData) => {
            const updatedData = { ...currentData, bmi: passedBmi }            
            // Call signUp after updating the state
            // signUp(updatedData) //original commented out            
            return updatedData
        })
        setBmiValue(passedBmi)
        setEnabledForms((oldData) => ({ ...oldData, ...{ signUp: true, bmiCalculator: false} }))

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
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let result = '';
            let done = false;
    
            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                result += decoder.decode(value, { stream: !done });
            }
            
            console.log(JSON.parse(result));
           
        } catch (error) {
            console.error(error);
        }
    }
    const container = useRef(null)
    useEffect(() => {
        if (container.current) container.current.focus()
    }, [])
    return (
        <div id="registrationFormSetupContainer"
            ref={container}
            tabIndex={0}
        >
            <div>
                {enabledForms.signUp && <SignUpForm action={getUserInfo} />}
                {enabledForms.bmiCalculator && <BmiCalculator action={getBmiInfo}/>}
            </div>
        </div>
    )
}
