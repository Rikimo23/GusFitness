import React from 'react'
import WrapperComponent from '../Component/WrapperComponent'
import NavBar from '../Component/NavBar'
import GlossaryDefinitionComponent from '../Component/GlossaryDefinitionComponent'
export default function GlossaryPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="pageMainTitle">Glossary Index</div>
        <GlossaryDefinitionComponent />
      </WrapperComponent>
    </>
  )
}
