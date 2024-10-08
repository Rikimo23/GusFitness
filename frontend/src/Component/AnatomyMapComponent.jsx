import { React, useState, useEffect, useRef } from 'react'
import anatomyFront from "../../public/anatomyFront.png";
import anatomyBack from "../../public/anatomyBack.png";
import AnatomyBackView from './AnatomyBackView';
import AnatomyFrontView from './AnatomyFrontView'


export default function AnatomyMapComponent({ setPartClicked, setShowWorkout }) {

    const innerDiagramContainerRef = useRef(null)
    useEffect(() => {
        //This implements model rotation using either the lef/right arrow keys, or q/e keys
        const onKeyDown = (e) => {
            if (e.key === "e" || e.key === "ArrowRight") {
                const element = innerDiagramContainerRef.current
                if (element) element.style.setProperty("transform", "rotateY(0.5turn)")
            } else if (e.key === "q" || e.key === "ArrowLeft") {
                const element = innerDiagramContainerRef.current
                if (element) element.style.setProperty("transform", "rotateY(0turn)")
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [])
    return (
        <div id="parentDiagramContainer">
            {/* This implements model rotation when clicking on the rotate button */}
            <button onClick={() => {
                const element = innerDiagramContainerRef.current
                if (element) {
                    const getValue = element.style.transform !== "rotateY(0.5turn)" ? "rotateY(0.5turn)" : "rotateY(0turn)"
                    element.style.setProperty("transform", getValue)
                }
            }}
                id="rotateButton"
            >Rotate</button>
            <div id="innerDiagramContainer"
                ref={innerDiagramContainerRef}
            >
                <div id="frontDiagram">
                    <AnatomyFrontView action={setPartClicked} setShowWorkout={setShowWorkout} />
                    <img src={anatomyFront} alt=''></img>
                </div>
                <div id="backDiagram">
                    <AnatomyBackView action={setPartClicked} setShowWorkout={setShowWorkout} />
                    <img src={anatomyBack} alt=''></img>
                </div>
            </div>
        </div>
    )
}

