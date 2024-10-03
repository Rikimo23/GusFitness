import {React, useEffect, useState} from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import AnatomyMapComponent from '../component/AnatomyMapComponent'
import VideoContainer from '../Component/VideoContainer'

export default function TutorialsPage() {
  const [partClicked, setPartClicked] = useState("something")
  useEffect(()=>{

  },[])
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="pageMainTitle">Choose a 
        Muscle Group</div>
        <AnatomyMapComponent setPartClicked={setPartClicked}/>
        {partClicked !== "" && <VideoContainer partClicked={partClicked}/>}
      </WrapperComponent>

    </>
  )
}
