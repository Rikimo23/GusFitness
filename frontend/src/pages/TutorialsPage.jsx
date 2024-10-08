import { React, useEffect, useState, useRef } from 'react'
import WrapperComponent from '../Component/WrapperComponent'
import NavBar from '../Component/NavBar'
import AnatomyMapComponent from '../component/AnatomyMapComponent'

export default function TutorialsPage() {
  /*This keeps track of the body part clicked on the AnatomyComponent. 
  Front parts end with front, and back parts end with back*/
  const [partClicked, setPartClicked] = useState("")
  /*Keeps track of all the workout videos and all properties associated with them, including but not limited to:
  name, url, muscleGroups, steps, difficulty level.
  These are used to display the selected workout for the body part we get from the clickedPart state*/
  const [allWorkouts, setAllWorkouts] = useState([])
  //stores the chosen workout embedded Url
  const [showWorkout, setShowWorkout] = useState("videoURl")
  //this stores the current workout to be displayed to the user.
  const [chosenWorkout, setChosenWorkout] = useState({})
  //this ref is used to get hold of the react dom element we will scroll to whenever the showWorkout state changes.
  const workOutContainerRef = useRef(null)
  // This hook triggers once every time the application runs in order to gather all the data from the api.
  //This ensures we don't run into stale/outdated data.
  useEffect(() => {
    const getAllWorkouts = async () => {

      try {//try to get all the data
        const response = await fetch("http://localhost:8081/api/exercises/all")
        if (!response.ok) {
          console.log(response.status)
          return //don't unpdate if something goes wrong
        }
        const workoutsInfo = await response.json()//get a promise with the unparsed workouts data, and parse it with .json().
        setAllWorkouts(() => [...workoutsInfo])//update the workouts state.
        console.tablet(workoutsInfo)//this showcases the data in order to make debugging a lot easier.
      }
      catch (error) { console.log(`error, something went wrong: ${error}`) }//Display what went wrong if something happens.
    }

    getAllWorkouts()
  }, [])
  //If the showWorkout state changes, this useEffect hook will update the chosenWorkout state.
  useEffect(() => {
    //this goes through all workouts, and returns the object with the matching url.
    const selectedWorkout = allWorkouts.find(workout => workout.url === showWorkout)
    console.table(selectedWorkout)//we display the data in the console to make sure it works
    setChosenWorkout(() => ({ ...selectedWorkout }))//update the chosen workout
    //We first have to make sure that the initial string has changed in order to trigger the
    //scroll to workout section animation. 
    if (showWorkout !== "videoURl" && workOutContainerRef.current) {
      workOutContainerRef.current.scrollIntoView({
        behavior: 'smooth', //this manages how the scrolling behavior is displayed. Smooth for an eased in scroll
        block: 'center' //This let's the window know what portion of the element should be scroleld to.
      });
    }

  }, [showWorkout])
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
          <iframe src={showWorkout} width="960" height="540"></iframe>
          <p>Description</p>
          <p>{chosenWorkout.description}</p>
        </div>}
      </WrapperComponent>

    </>
  )
}


