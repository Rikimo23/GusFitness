import React from 'react'
import InputComponent from './InputComponent';
export default function SignInForm() {
  return (
    <div>
        <form action="" method="post">
            <InputComponent 
                name="Email"            
                placeHolderText={"Email"}
                type={"email"}
            />
            <InputComponent 
                name="Password"            
                placeHolderText={"Password"}
                type={"password"}
            />            
            <input className='submitFormButton' type='submit' value="Sign In"/>
        </form>
    </div>
  )
}
