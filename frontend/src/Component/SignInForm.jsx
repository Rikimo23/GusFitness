import {React, useState, useEffect} from 'react'
import InputComponent from './InputComponent';
export default function SignInForm(){
  const [userInfo, setUserInfo] = useState({email: "", password:""})
  useEffect(()=>{
    // console.table(userInfo)
  },[userInfo])
  const logIn=(e)=>{
    const getUsers = async()=>{
      try{
        const response = await fetch("http://localhost:8081/api/users")
        if(!response.ok){
          console.log(response.status)
          return
        }
        const users = await response.json();
        console.table(users)
      }
      catch(error){
        console.error(error);
      }
    }
    getUsers()
    e.preventDefault()
  }
  return (
    <div>
        <form onSubmit={logIn} method="post">
            <InputComponent 
                name="Email"            
                placeHolderText={"Email"}
                type={"email"}
                getValue={(info)=>{
                  setUserInfo((currentInfo)=>({...currentInfo, ...{email: info}}))
                }}
                //bruh//
                //wow//
            />
            <InputComponent 
                name="Password"            
                placeHolderText={"Password"}
                type={"password"}
                getValue={(info)=>{
                  setUserInfo((currentInfo)=>({...currentInfo, ...{password: info}}))
                }}
            />            
            <input className='submitFormButton' type='submit' value="Sign In"/>
        </form>
    </div>
  )
}
