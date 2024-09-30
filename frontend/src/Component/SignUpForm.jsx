import {React, useEffect, useState} from 'react'
import InputComponent from './InputComponent'
export default function SignUpForm({action=undefined}) {
    const [newUserData, setNewUserData] = useState({username: "", password:"", email:""})


    const setUserData=(e)=>{
        if(action !== undefined){
            action(newUserData)
        }
        e.preventDefault();
    }
    const getUserName=(userName)=>{
        setNewUserData((currentData)=>({...currentData, ...{username: userName}}))
    }
    const getPassword=(password)=>{
        setNewUserData((currentData)=>({...currentData, ...{password: password}}))
    }
    const getEmail=(email)=>{
        setNewUserData((currentData)=>({...currentData, ...{email: email}}))
    }
  return (
    <div>
        <form onSubmit={setUserData} method="post">
            <InputComponent 
                name="Create User Name"            
                placeHolderText={"User Name"}
                type={"text"}
                getValue = {getUserName}
            />
            <InputComponent 
                name="Create Password"            
                placeHolderText={"Password"}
                type={"password"}
                getValue ={getPassword}
            />
            <InputComponent 
                name="Email"            
                placeHolderText={"Email"}
                type={"email"}
                getValue={getEmail}
            />
            <input className='submitFormButton' type='submit' value="Sign Up" />
        </form>
    </div>
  )
}
