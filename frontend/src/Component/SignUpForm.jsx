import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputComponent from './InputComponent'
export default function SignUpForm({ action = undefined }) {
    const [newUserData, setNewUserData] = useState({ username: "", password: "", email: "" })
    const navigate = useNavigate()

    const setUserData = (e) => {
        if (action !== undefined) {
            action(newUserData)
            localStorage.setItem("loggedIn", "true")
            // navigate("/")
        }
        e.preventDefault();
    }
    // update the user name
    const getUserName = (userName) => {
        setNewUserData((currentData) => ({ ...currentData, ...{ username: userName } }))
    }
    // update the user name password
    const getPassword = (password) => {
        setNewUserData((currentData) => ({ ...currentData, ...{ password: password } }))
    }
    // update the user name email
    const getEmail = (email) => {
        setNewUserData((currentData) => ({ ...currentData, ...{ email: email } }))
    }
    return (
        <div>
            <form onSubmit={setUserData} method="post">
                <InputComponent
                    name="create user name"
                    labelName="Create User Name"
                    placeHolderText={"User Name"}
                    type={"text"}
                    getValue={getUserName}
                />
                <InputComponent
                    name="create password"
                    labelName="Create Password"
                    placeHolderText={"Password"}
                    type={"password"}
                    getValue={getPassword}
                />
                <InputComponent
                    name="email"
                    labelName="Email"
                    placeHolderText={"Email"}
                    type={"email"}
                    getValue={getEmail}
                />
                <input className='submitFormButton' type='submit' value="Sign Up" />
            </form>
        </div>
    )
}
