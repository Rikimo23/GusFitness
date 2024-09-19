import React from 'react'
import SignInForm from '../Component/SignInForm'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
export default function SignInPage() {
  return (
    <WrapperComponent>
        <NavBar/>
        <div>SignInPage</div>
        <SignInForm />
    </WrapperComponent>
    
  )
}
