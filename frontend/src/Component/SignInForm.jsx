import { React, useState, useEffect } from 'react'
import InputComponent from './InputComponent';
import { useNavigate } from 'react-router-dom'
export default function SignInForm() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" })
  const [users, setUsers] = useState([])
  const [userInfoValid, setUserinfoValid] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    // Make sure the array has users
    if (users.length <= 0 && users === null) return
    // lowercase the email 
    const userEmail = userInfo.email.toLowerCase()
    // and get the password
    const userPassword = userInfo.password
    //find the user based on both the email, and the correct password. Email is not case sensitive, but the password is.
    const validUser = users.find(user => user.email.toLowerCase() === userEmail && user.password === userPassword)
    
    if (validUser !== undefined) {
      //show the user info in the console
      console.table(validUser)
      //show the user id, so we don't have to look at the user info all the time
      console.log(`Your user id is ${validUser.id}`)
      //update the loggedIn varaibel in the localStorage
      localStorage.setItem("loggedIn", "true")
      //update the userId varaibel in the localStorage
      localStorage.setItem("userId", validUser.id)
      navigate("/bmi")
    }else{
      // show the message if the user info doesn't match
      console.log('wrong password or email, please try again')
    }
  }, [users])
  const logIn = (e) => {
    e.preventDefault()
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/users/all",
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
