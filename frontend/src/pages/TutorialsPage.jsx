import { React, useEffect, useState } from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import AnatomyMapComponent from '../component/AnatomyMapComponent'
import VideoContainer from '../Component/VideoContainer'

export default function TutorialsPage() {
  const [partClicked, setPartClicked] = useState("")
  const [allWorkouts, setAllWorkouts] = useState([])
  const [backParts, setBackParts] = useState("trapezius, traps, deltoids, dorsals, triceps".split())
  const [lowerBodyBack, setLowerBodyBack] = useState("hamstring, calfs, glutes".split(","))
  const [frontBodyParts, setFrontBodyParts] = useState("chest,biceps,abs,quadriceps".split(","))
  const [relatedVideos, setRelatedVideos] = useState([])

  useEffect(() => {
    const getAllWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/exercises/all")
        if (!response.ok) {
          console.log(response.status)
          return
        }
        const workoutsInfo = await response.json()
          
                
              
        // setRelatedVideos(()=> [...allVids])
        setAllWorkouts(() => [...workoutsInfo])
              console.tablet(workoutsInfo)
        // const workoutsData = workoutsInfo[0]
        // setVideoSettings((currentSettings) => ({
                //   ...currentSettings, ...{
                //     video: workoutsData.url
                //   },
                //   workoutname: workoutsData.name, description: workoutsData.description,
                //   difficulty: workoutsData.difficulty
                // }))
                // setSteps(() => [...workoutsData.steps])
                // console.log(workoutsData)

              }
              catch (error) {console.log(`error, something went wrong: ${error}`)}
    }

              getAllWorkouts()
  }, [])
//   useEffect(()=>{
//     if(partClicked.includes("front")){
//       console.log("clicked the front of the body")
//       if(partClicked.includes("chest")){
//         const links = allWorkouts.filter(workout=> workout.muscleGroups.includes("chest"))
//         console.log(links)
//       }
//     }
//     else{

//     }
        
    
    
// },[partClicked])
  return (
              <>
                <NavBar />
                <WrapperComponent>
                  <div className="pageMainTitle">Choose a
                    Muscle Group</div>
                  <AnatomyMapComponent setPartClicked={setPartClicked} />
                  <div className="partClickedDisplay">{partClicked}</div>
                  {allWorkouts.map((workout, index) => {
          return (
            <div key={`workoutKey${index}`} className="workoutsContainer" >
              <span>{workout.name}</span>
              <div>{workout.difficulty}</div>
              <iframe src={workout.url}></iframe>
              {workout.steps.map((step, count) => {
                <p key={`step-count-${count}`}>{step}</p>
              })}
             </div> 
            )
        }) } 
                  {/* {allWorkouts.map((workout, index)=>{
          <WorkoutSection key={`workoutSection-index${index}`}sectionName={`Workout ${index}`}>
            <VideoContainer passedWorkout={workout} />
          </WorkoutSection>

        })} */}
                </WrapperComponent>

              </>
              )
}

              const WorkoutSection=({sectionName, children})=>{
  return(
              <section>
                <div>{sectionName}</div>
                {children}
              </section>
              )
}