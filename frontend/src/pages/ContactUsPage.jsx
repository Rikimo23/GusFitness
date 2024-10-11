import React from 'react'
import WrapperComponent from '../Component/WrapperComponent'
import NavBar from '../Component/NavBar'
import ContactUsForm from '../Component/ContactUsForm'

export default function ContactUsPage() {
  return (
    <>
      <NavBar/>
      <WrapperComponent>      
        <div className="pageMainTitle">Get in Contact!</div>
        <ContactUsForm />
      </WrapperComponent>
    </>    
  )
}
