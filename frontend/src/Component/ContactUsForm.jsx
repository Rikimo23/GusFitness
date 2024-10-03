import {React, useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import InputComponent from './InputComponent';
export default function ContactUsForm() {
    const formRef = useRef(null)
    const [messageSubmitted, setMessageSubmitted] = useState(false)
    const submitEmailMessage=(e)=>{
        <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>


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
        <form id= "contactUsForm" action="" method="post" ref={formRef}>
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
            <textarea name="textArea" id="textAreaContactUs" placeholder='Your message' required></textarea>
            <input className= "submitFormButton" type='submit' value="Submit"/>
        </form>
    </div>
  )
}
