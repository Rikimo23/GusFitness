import React from 'react'
import InputComponent from './InputComponent'
export default function SignUpForm() {
  return (
    <div>
        <form action="" method="post">
            <InputComponent 
                name="Create User Name"            
                placeHolderText={"User Name"}
                type={"text"}
            />
            <InputComponent 
                name="Create Password"            
                placeHolderText={"Password"}
                type={"password"}
            />
            <InputComponent 
                name="Email"            
                placeHolderText={"Email"}
                type={"email"}
            />
            <input className='submitFormButton' type='submit' value="Sign Up" />
        </form>
    </div>
  )
}
