import { React, useState, useEffect } from 'react'
import InputComponent from './InputComponent';
import { useNavigate } from 'react-router-dom'
export default function SignInForm() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" })
  const [users, setUsers] = useState([])
  const [userInfoValid, setUserinfoValid] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (users.length <= 0 && users === null) return
    const userEmail = userInfo.email.toLowerCase()
    const userPassword = userInfo.password.toLowerCase()
    const fetchedUserEmail = users.find(user => user.email.toLowerCase())
    const fetchedUserPassword = users.find(user => user.password.toLowerCase())
    if (fetchedUserEmail === userEmail && fetchedUserPassword === userPassword) {
      console.log("Welcome back!")
      localStorage.setItem("loggedIn", "true")
      navigate("/bmi")
    }
  }, [userInfo, users])
  const logIn = (e) => {
    e.preventDefault()
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/users",
          {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`)
        }        
        const AllUsers = await response.json();
        setUsers(AllUsers)
        console.table(AllUsers)        
      }
      catch (error) {
        console.error(error);
        console.log(`Error, loggedInValue: ${localStorage.getItem("loggedIn")}`)
      }
    }
    getUsers()
    
  }

  return (
    <div>
      <form onSubmit={logIn} method="post">
        <InputComponent
          name={"email"}
          labelName={"Email"}
          placeHolderText={"Email"}
          type={"email"}
          getValue={(info) => {
            setUserInfo((currentInfo) => ({ ...currentInfo, ...{ email: info } }))
          }}
        />
        <InputComponent
          name={"password"}
          labelName={"Password"}
          placeHolderText={"Password"}
          type={"password"}
          getValue={(info) => {
            setUserInfo((currentInfo) => ({ ...currentInfo, ...{ password: info } }))
          }}
        />
        <input className='submitFormButton' type='submit' value="Sign In" />
      </form>
    </div>
  )
}
