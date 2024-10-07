import { React, useEffect, useState, useRef } from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import AnatomyMapComponent from '../component/AnatomyMapComponent'
import VideoContainer from '../Component/VideoContainer'
import Video from './Video'

export default function TutorialsPage() {
  const [partClicked, setPartClicked] = useState("")
  const [allWorkouts, setAllWorkouts] = useState([])
  const [backParts, setBackParts] = useState("trapezius, traps, deltoids, dorsals, triceps".split())
  const [lowerBodyBack, setLowerBodyBack] = useState("hamstring, calfs, glutes".split(","))
  const [frontBodyParts, setFrontBodyParts] = useState("chest,biceps,abs,quadriceps".split(","))
  const [relatedVideos, setRelatedVideos] = useState([])
  const [showWorkout, setShowWorkout] = useState("videoURl")
  const [chosenWorkout, setChosenWorkout] = useState({})
  const workOutContainerRef = useRef(null)
  useEffect(() => {
    const getAllWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/exercises/all")
        if (!response.ok) {
          console.log(response.status)
          return
        }
        const workoutsInfo = await response.json()
        setAllWorkouts(() => [...workoutsInfo])
        console.tablet(workoutsInfo)
      }
      catch (error) { console.log(`error, something went wrong: ${error}`) }
    }

    getAllWorkouts()
  }, [])
  useEffect(()=>{
    const selectedWorkout = allWorkouts.find(workout=> workout.url === showWorkout)
    console.table(selectedWorkout)
    setChosenWorkout(()=> ({...selectedWorkout}))
    if (showWorkout !== "videoURl" && workOutContainerRef.current) {
      workOutContainerRef.current.scrollIntoView({
          behavior: 'smooth', 
          block: 'center' 
      });
  }

  },[showWorkout])
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="pageMainTitle">Choose a
          Muscle Group</div>
        <AnatomyMapComponent setPartClicked={setPartClicked} setShowWorkout={setShowWorkout} />
        <div className="partClickedDisplay">{partClicked}</div>
        {showWorkout !== "videoURl" && chosenWorkout !== undefined && <div className="workoutsContainer" ref={workOutContainerRef}>
          <h1>{chosenWorkout.name}</h1>
          <p>Difficulty:</p>
          <p>{chosenWorkout.difficulty}</p>
          {/* ALL COMMENTED OUT CODE BREAKS THE APPLICATION WHEN TRYING TO ACCESS THE RESPECTIVE PROPERTIES */}
          {/* <p>{chosenWorkout.muscleGroups.join(", ")}</p> */}
          <iframe src={showWorkout} width="960" height="540"></iframe>  
          <p>Description</p>
          <p>{chosenWorkout.description}</p>
          {/* <p>Steps:</p> */}
          {/* {chosenWorkout.steps.map((step, count)=><div key={`step-index${count}`}>{step}</div>)}           */}
        </div>}
      </WrapperComponent>

    </>
  )
}

const WorkoutSection = ({ sectionName, children }) => {
  return (
    <section>
      <div>{sectionName}</div>
      {children}
    </section>
  )
}