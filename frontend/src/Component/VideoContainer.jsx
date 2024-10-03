import {React, useState, useEffect} from 'react'

export default function VideoContainer({partClicked}) {
    const [videoSettings, setVideoSettings] = useState({difficulty: "",
        currentDifficulty: "easy", workoutName: "", currentVideo: 0, video: "",
        description: "", muscleGroups: [""]
    
     })
     const [steps, setSteps] = useState([])   
    
    useEffect(()=>{
        const getAllWorkouts = async()=>{
            try{
                const response = await fetch("http://localhost:8081/api/exercises/all")
                if(!response.ok){
                    console.log(response.status)
                    return
                }
                const workoutsInfo = await response.json() 
                const selectedWorkout = workoutsInfo.map((workout)=>{
                   return workout.muscleGroups[0].toLowerCase().includes === partClicked
                })
                console.log(`part: ${workout}`)
                console.table(workoutsInfo)
                const workoutsData = workoutsInfo[0]
                setVideoSettings((currentSettings)=>({...currentSettings, ...{
                    video: workoutsData.url},
                    workoutname: workoutsData.name, description: workoutsData.description,
                    difficulty: workoutsData.difficulty
                }))
                setSteps(()=>[...workoutsData.steps])
                console.log(workoutsData)
                
            }
            catch(error){console.log(`error, something went wrong: ${error}`) }
        }
        
        getAllWorkouts()
        
    },[])
    const setDifficulty =(difficulty)=>{

    }
  return (
    <div className="videoContainer">
        <h1>{videoSettings.workoutname}</h1>
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
        </div>        
    </div>
  )
}
