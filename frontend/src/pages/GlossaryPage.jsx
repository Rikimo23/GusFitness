import React from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import GlossaryDefinitionComponent from '../Component/GlossaryDefinitionComponent'
export default function GlossaryPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="pageHeader">Glossary Index</div>
        <GlossaryDefinitionComponent />
      </WrapperComponent>
    </>
  )
}
