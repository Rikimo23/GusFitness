import React from 'react'
import InputComponent from './InputComponent'
export default function SignUpForm() {
  return (
    <div>
        <form action="" method="post">
            <InputComponent 
                name="User Name"            
                placeHolderText={"e.i Gust"}
                type={"text"}
            />
            <InputComponent 
                name="Password"            
                placeHolderText={"e.i somepassword5*"}
                type={"password"}
            />
            <InputComponent 
                name="Email"            
                placeHolderText={"e.i someDudeNinja@domain.com"}
                type={"email"}
            />
            <input type='submit' value="Sign Up" />
        </form>
    </div>
  )
}
