import { React, useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import InputComponent from './InputComponent';
export default function ContactUsForm() {
  const formRef = useRef(null)
  const [messageSubmitted, setMessageSubmitted] = useState(false)
  const submitEmailMessage = (e) => {
    emailjs
      .sendForm("service_1em5lwj", "template_rzj10z4", formRef.current, {
        publicKey: "cGLOiQADyQlQNdfFc",
      })
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 3000); // Auto-hide after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setMessageSent(false);
        }
      );
    e.target.reset();
    e.preventDefault();
  }
  return (
    <div>
      <form id="contactUsForm"
       onSubmit={submitEmailMessage}
       method="post" ref={formRef}>
        <InputComponent
          labelName="Name"
          name="user_name"
          placeHolderText={"Name"}
          type={"text"}
          required
        />
        <InputComponent
          labelName="Subject"
          name="user_subject"
          placeHolderText={"subject"}
          type={"text"}
        />
        <InputComponent
          labelName="Email"
          name="user_email"
          placeHolderText={"email"}
          type={"email"}
          required
        />
        <textarea name="message" id="textAreaContactUs" placeholder='Your message' required></textarea>
        <input className="submitFormButton" type='submit' value="Submit" />
      </form>
    </div>
  )
}
