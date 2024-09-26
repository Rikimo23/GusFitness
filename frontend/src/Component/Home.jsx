import { React, useEffect, useState, useRef } from 'react'
import NavBar from './NavBar'
import WrapperComponent from './WrapperComponent'
import ArmFlexComponent from './ArmFlexComponent'
import RegisterFormSetup from './RegisterFormSetup'
function Home() {
   const [registerOpen, setRegisterOpen] = useState(false)
   const buttonClicked=()=>{
      setRegisterOpen(true)
   }
   const exitButtonClicked=()=>{
       setRegisterOpen(false)
       document.body.style.overflowY = 'auto';
       document.body.style.height= 'unset';
   }
   return (
      <>
         <NavBar />
         <WrapperComponent>
            <SectionComp>
               <h1>My mission is simple:</h1>
               <p>
                  To provide accessible, effective, and personalized fitness resources that cater to your specific goals. Whether you’re looking to build muscle, get lean, or bulk up, we offer tailored workout routines, meal plans, and educational content to guide you every step of the way.
               </p>
               <RegisterButton buttonClicked={buttonClicked} />
            </SectionComp>
            <SectionComp imageSource="\public\img1.png" altText="some text"><p>Why I Started I understand that the fitness world can be overwhelming, with so much information and so many options available. That’s why I created this platform – to simplify your fitness journey and make it as straightforward as possible. With clear workout tutorials, a focus on understanding muscle groups, BMI tracking, and meal planning, we aim to equip you with the knowledge and tools you need to succeed.</p></SectionComp>
            <SectionComp imageSource="\public\img2.png" altText="some text"><p>We envision a world where fitness is accessible to all, where anyone can confidently work towards their goals with the right guidance and support. Our platform is here to help you not just reach your fitness targets, but to maintain a healthy lifestyle for the long term.</p></SectionComp>
            <SectionComp imageSource="\public\img3.png" altText="some text"><p>Join Us I invite you to join our community and take the first step towards a healthier, fitter you. With Gus Gym & Fitness, you’re not just working out – you’re building a lifestyle that you can sustain and enjoy for years to come.</p></SectionComp>
            <SectionComp imageSource="\public\img4.png" altText="some text"><p>Our mission is to empower you on your fitness journey, whether you're just starting out, have been training for a while, or are an advanced athlete looking to reach new heights. This site was created with one goal in mind: to provide you with the tools, knowledge, and support you need to achieve your fitness goals, whatever these may be.</p></SectionComp>
            <SectionComp imageSource="\public\img5.png" altText="some text"><p>Whether you’re aiming to gain muscle, get lean, or bulk up, we have something tailored just for you. Explore our workout tutorials designed for every skill level, track your progress with our BMI calculator and muscle group focus guides, and find meal plans that align with your specific fitness objectives. Our resources are here to guide you every step of the way, ensuring that you have everything you need to succeed.</p></SectionComp>
            <SectionComp>
               <div id="homeBottomLetsGetStarted">
                  <p>Let’s work together to turn your fitness goals into reality! Click on “get started” button to help you with your BMI, workout plan, and your nutrition. </p>
                  <RegisterButton buttonClicked={buttonClicked}/>
                  <p>There is an option to make a account so you can be able to track you're progress.</p>
               </div>
            </SectionComp>
            {registerOpen && <RegisterFormSetup exitButtonClicked = {exitButtonClicked}/>}
         </WrapperComponent>
      </>

   )
}

export default Home

const SectionComp = ({ imageSource, altText, children }) => {
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef();

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(ref.current);
            }
         },
         {
            threshold: 0.4, // Trigger when 10% of the component is visible
         }
      );

      if (ref.current) observer.observe(ref.current);

      return () => {
         if (ref.current) observer.unobserve(ref.current);
      };
   }, []);

   return (
      <section
         ref={ref}
         className={`slide-in ${isVisible ? 'visible' : ''}`}
      >
         {children}
         {imageSource && < img src={imageSource} alt={altText} />}
      </section>
   )
}
const RegisterButton = ({ buttonClicked }) => {
   const [buttonHovered, setButtonHovered] = useState(false)
   return (
      <button
         className="registerButton"
         onMouseEnter={() => setButtonHovered(true)}
         onMouseLeave={() => setButtonHovered(false)}
         onClick={buttonClicked}
      >
         <div>
            <ArmFlexComponent isHovered={buttonHovered} />
            <div>Get Started!</div>
         </div>
      </button>
   )
}