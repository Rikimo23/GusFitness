import React from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import SignUpForm from '../Component/SignUpForm'
export default function SignUpPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <SignUpForm />
      </WrapperComponent>
    </>
  )
}
