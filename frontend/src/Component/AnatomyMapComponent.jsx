import {React, useState, useEffect, useRef} from 'react'
import {anatomySvgs} from "./svgAnatomySvgs"
import anatomyFront from "../../public/anatomyFront.png";
import anatomyBack from "../../public/anatomyBack.png";


export default function AnatomyMapComponent() {

    const innerDiagramContainerRef = useRef(null)
    useEffect(()=>{
        const onKeyDown =(e)=>{
            if(e.key === "e" || e.key === "ArrowRight"){
                const element = innerDiagramContainerRef.current
                if(element) element.style.setProperty("transform", "rotateY(0.5turn)")
            }else if(e.key ==="q" || e.key === "ArrowLeft"){
                const element = innerDiagramContainerRef.current
                if(element)element.style.setProperty("transform", "rotateY(0turn)")                
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return()=>{
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [])
    
  return (
    <div id="parentDiagramContainer">
        <button onClick={()=>{
            const element = innerDiagramContainerRef.current
            if(element){
                const getValue = element.style.transform !== "rotateY(0.5turn)"? "rotateY(0.5turn)": "rotateY(0turn)"
                element.style.setProperty("transform", getValue)
            }
        }}
        id="rotateButton"
        >Rotate</button>
        <div id="innerDiagramContainer"
            ref= {innerDiagramContainerRef}           
        >
            <div id="frontDiagram">
                {anatomySvgs.front}
                <img src={anatomyFront} alt=''></img>
            </div>
            <div id="backDiagram">
                {anatomySvgs.back}
                <img src={anatomyBack} alt=''></img>
                
            </div>
            
        </div>
    </div>
  )
}

