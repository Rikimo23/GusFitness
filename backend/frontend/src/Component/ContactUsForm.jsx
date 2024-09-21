import React from 'react'
import InputComponent from './InputComponent';
export default function ContactUsForm() {
  return (
    <div>
        <form action="" method="post">
            <InputComponent 
                name="First Name"            
                placeHolderText={"e.i Gust"}
                type={"text"}
            />
            <InputComponent 
                name="Last Name"            
                placeHolderText={"e.i Pegasus"}
                type={"text"}
            />
            <InputComponent 
                name="Email"            
                placeHolderText={"e.i Gust"}
                type={"email"}
            />
            <input className= "submitFormButton" type='submit' value="Submit"/>
        </form>
    </div>
  )
}
