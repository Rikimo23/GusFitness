import {React, useState} from 'react'
import NavBar from './NavBar'
import WrapperComponent from './WrapperComponent'
import ArmFlexComponent from './ArmFlexComponent'
function Home() {
   return (
      <>
         <NavBar />
         <WrapperComponent>

            <h1>My mission is simple:</h1>
            <p>
               To provide accessible, effective, and personalized fitness resources that cater to your specific goals. Whether you’re looking to build muscle, get lean, or bulk up, we offer tailored workout routines, meal plans, and educational content to guide you every step of the way.

            </p>
            <RegisterButton/>
            <SectionComp imageSource="" altText="some text">Why I Started I understand that the fitness world can be overwhelming, with so much information and so many options available. That’s why I created this platform – to simplify your fitness journey and make it as straightforward as possible. With clear workout tutorials, a focus on understanding muscle groups, BMI tracking, and meal planning, we aim to equip you with the knowledge and tools you need to succeed.</SectionComp>
            <SectionComp imageSource="" altText="some text">We envision a world where fitness is accessible to all, where anyone can confidently work towards their goals with the right guidance and support. Our platform is here to help you not just reach your fitness targets, but to maintain a healthy lifestyle for the long term.</SectionComp>
            <SectionComp imageSource="" altText="some text">Join Us I invite you to join our community and take the first step towards a healthier, fitter you. With Gus Gym & Fitness, you’re not just working out – you’re building a lifestyle that you can sustain and enjoy for years to come.</SectionComp>
            <SectionComp imageSource="" altText="some text">Our mission is to empower you on your fitness journey, whether you're just starting out, have been training for a while, or are an advanced athlete looking to reach new heights. This site was created with one goal in mind: to provide you with the tools, knowledge, and support you need to achieve your fitness goals, whatever these may be.</SectionComp>
            <SectionComp imageSource="" altText="some text">Whether you’re aiming to gain muscle, get lean, or bulk up, we have something tailored just for you. Explore our workout tutorials designed for every skill level, track your progress with our BMI calculator and muscle group focus guides, and find meal plans that align with your specific fitness objectives. Our resources are here to guide you every step of the way, ensuring that you have everything you need to succeed.</SectionComp>

         </WrapperComponent>
      </>

   )
}

export default Home

const SectionComp = ({ imageSource, altText, children }) => {
   return (
      <div>
         <p>{children}</p>
         <img src={imageSource} alt={altText} />
      </div>
   )
}
const RegisterButton=()=>{
   const [buttonHovered, setButtonHovered] = useState(false)
   return(
      <button 
      id="registerButton" 
      onMouseEnter={()=> setButtonHovered(true)}
      onMouseLeave={()=> setButtonHovered(false)}
      >
         <div>
            <ArmFlexComponent isHovered={buttonHovered}/>
            <div>Get Started!</div>
         </div>
      </button>
   )
}