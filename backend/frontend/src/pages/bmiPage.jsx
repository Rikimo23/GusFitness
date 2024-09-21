import React from 'react'
import WrapperComponent from '../component/WrapperComponent'
import BMICalculator from '../Component/bmiCalculator'
import NavBar from '../Component/NavBar'
export default function bmiPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="bmiColumn">
          <InfoBlock>
            <h1>What is BMI?</h1>
            <p>
              BMI, or Body Mass Index, is a simple calculation that uses
              your height and weight to estimate body fat. It's a useful
              tool to assess whether you're within a healthy weight range.
              The BMI is calculated by dividing a person's weight in kilograms by the square root of their height in meters (kg/m²).
            </p>
          </InfoBlock>
          <InfoBlock>
            <h1>BMI Categories:</h1>
            <BMICategory categoryName={0} />
            <BMICategory categoryName={1} />
            <BMICategory categoryName={2} />
            <BMICategory categoryName={3} />
          </InfoBlock>
          <InfoBlock>
            <h1>How We Use Your BMI:</h1>
            <p>Based on your BMI, we tailor both workout and nutrition plans to help you reach or maintain a healthy weight.</p>

            <h1>Underweight:</h1>
            <p>We'll recommend strength training exercises to help you build muscle mass, along with a high-calorie, nutrient-dense meal plan.</p>

            <h1>Normal weight:</h1>
            <p>You’ll receive a balanced workout plan that combines cardio, strength training, and flexibility exercises, along with a well-rounded nutrition plan to maintain your current weight and health.</p>

            <h1>Overweight:</h1>
            <p>We’ll suggest a combination of cardio and strength workouts to help you lose weight gradually and safely. Your nutrition plan will focus on creating a calorie deficit while ensuring you get all the nutrients you need.</p>

            <h1>Obese:</h1>
            <p>Our recommendations will include low-impact exercises to get you started on your fitness journey, with a focus on gradually increasing intensity. The nutrition plan will be designed to help you lose weight in a sustainable way, prioritizing heart health and overall wellness.</p>

            <p>This personalized approach ensures that your fitness and nutrition plan aligns with your specific needs, helping you achieve your health goals more effectively.</p>
          </InfoBlock>
        </div>
        <div className="bmiColumn"><BMICalculator /></div>
      </WrapperComponent>
    </>
  )
}

const BMICategory = ({ categoryName = 1 }) => {
  const categories = ["Underweight", "Normal Weight", "Overweight", " Obese"]
  const ranges = ["BMI less than 18.5", "BMI 18.5 - 24.9", "BMI 25 - 29.9", "BMI 30 or greater"]
  return (
    <div>
      <span><b>{categories[categoryName]}:</b> {ranges[categoryName]}</span>
    </div>
  )
}

const InfoBlock = ({ children }) => {
  return (
    <div className="infoBlock">
      {children}
    </div>
  )
}