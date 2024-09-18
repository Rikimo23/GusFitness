import React from 'react'
import InputComponent from './InputComponent';
export default function SignInForm() {
  return (
    <div>
        <form action="" method="post">
            <InputComponent 
                name="Email"            
                placeHolderText={"e.i someDudeNinja@domain.com"}
                type={"email"}
            />
            <InputComponent 
                name="Password"            
                placeHolderText={"e.i somepassword5*"}
                type={"password"}
            />            
            <input type='submit'>Sign In</input>
        </form>
    </div>
  )
}
