import React from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import AnatomyMapComponent from '../component/AnatomyMapComponent'
export default function TutorialsPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="pageMainTitle">Choose a 
        Muscle Group</div>
        <AnatomyMapComponent/>
      </WrapperComponent>

    </>
  )
}
