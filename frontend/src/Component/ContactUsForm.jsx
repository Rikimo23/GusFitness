import React from 'react'
import InputComponent from './InputComponent';
export default function ContactUsForm() {
  return (
    <div>
        <form action="" method="post">
            <InputComponent 
                name="First Name"            
                placeHolderText={"Name"}
                type={"text"}
                required
            />
            <InputComponent 
                name="Last Name"            
                placeHolderText={"Last Name (optional)"}
                type={"text"}
            />
            <InputComponent 
                name="Email"            
                placeHolderText={"email"}
                type={"email"}
                required
            />
            <input className= "submitFormButton" type='submit' value="Submit"/>
        </form>
    </div>
  )
}
