import {React, useState, useEffect} from 'react'

export default function VideoContainer({passedWorkout}) {
    const [videoSettings, setVideoSettings] = useState({difficulty: "",
        currentDifficulty: "", workoutName: "", video: "",
        description: "", muscleGroups: [""]    
     })
     const [videos, setVideos] = useState([])
     const [steps, setSteps] = useState([])  
     useEffect(()=>{
        setVideoSettings((currentSettings)=>({...currentSettings, ...{
            difficulty: passedWorkout.difficulty, workoutname: passedWorkout.name, 
            video: passedWorkout.url, description: passedWorkout.description, steps: passedWorkout.steps,
            muscleGroups: passedWorkout.muscleGroups
        }}))
     },[])


    const setDifficulty =(difficulty)=>{
    
    }
  return (
    <div className="videoContainer">
        <h1>{videoSettings.workoutName}</h1>
        <div>Difficulty</div>
        <span data-difficulty="hard">{videoSettings.difficulty}</span>
        <div>Steps:</div>
        <div>
            {steps.map((step, index)=>{
                return(
                    <p key={`step-num-${index}`}>{step}</p>
                )
            })}
        </div>
        <div>
            <iframe src={videoSettings.video}></iframe>
            <p>{videoSettings.description}</p>
            <p>{videoSettings.muscleGroups}</p>
        </div>        
    </div>
  )
}
