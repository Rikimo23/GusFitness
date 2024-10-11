import React from 'react'
import WrapperComponent from '../Component/WrapperComponent'
import NavBar from '../Component/NavBar'
import SignUpForm from '../Component/SignUpForm'
import RegisterFormSetup from '../Component/RegisterFormSetup'
export default function SignUpPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <RegisterFormSetup />
      </WrapperComponent>
    </>
  )
}
