import {React, useState, useEffect} from 'react'
import InputComponent from './InputComponent';
import {useNavigate} from 'react-router-dom'
export default function SignInForm(){
  const [userInfo, setUserInfo] = useState({email: "", password:""})
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    if(users.length <= 0 && users === null) return 
    const userEmail = userInfo.email.toLowerCase() 
    const userPassword = userInfo.password.toLowerCase()
    const fetchedUserEmail = users.find(user=> user.email.toLowerCase()) 
    const fetchedUserPassword = users.find(user=> user.password.toLowerCase()) 
    if(fetchedUserEmail === userEmail && fetchedUserPassword === userPassword) {
      console.log("Welcome back you bum!")
      navigate("/bmi")
    }
  },[userInfo])
  const logIn=(e)=>{
    const getUsers = async()=>{
      try{
        const response = await fetch("http://localhost:8081/api/users")
        if(!response.ok){
          console.log(response.status)
          return
        }
        const AllUsers = await response.json();
        setUsers(()=>[...AllUsers])
        navigate("/bmi") 
        localStorage.setItem("loggedIn", "true")
        console.table(AllUsers)
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
                name={"email"}
                labelName={"Email"}
                placeHolderText={"Email"}
                type={"email"}
                getValue={(info)=>{
                  setUserInfo((currentInfo)=>({...currentInfo, ...{email: info}}))
                }}
                //bruh//
                //wow//
            />
            <InputComponent 
                name={"password"}
                labelName={"Password"}
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
