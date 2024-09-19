import React from 'react'
import WrapperComponent from '../component/WrapperComponent'
import BMICalculator from '../Component/bmiCalculator'
import NavBar from '../Component/NavBar'
export default function bmiPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div>bmiPage</div>
        <BMICalculator />
      </WrapperComponent>
    </>
  )
}
