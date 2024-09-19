import React from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import ContactUsForm from '../component/ContactUsForm'

export default function ContactUsPage() {
  return (
    <>
      <NavBar/>
      <WrapperComponent>      
        <div>This is the contact page</div>
        <ContactUsForm />
      </WrapperComponent>
    </>
    
  )
}
