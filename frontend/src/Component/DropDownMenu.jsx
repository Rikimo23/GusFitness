import { React, useState, useEffect, useRef } from 'react'

export default function DropDownMenu({ mouseExit, menuOptions = [], optionsFunctions = [] }) {
    const [mouseEntered, setMouseEntered] = useState(false)
    const [optionsAndFunctions, setOptionsAndFunctions] = useState([])
    const [funcs, setFuncs] = useState([])
    const container = useRef(null)
    useEffect(() => {
        const intersectingRect = (rect, point) => {
            return (rect.left <= point.x && rect.right >= point.x && rect.top <= point.y && rect.bottom >= point.y)
        }
        const leftClicked = (e) => {
            if (container.current &&
                !intersectingRect(container.current.getBoundingClientRect(), { x: e.clientX, y: e.clientY })) {
                setMouseEntered(false)
                mouseExit(false)
            }
        }
        window.addEventListener('mousedown', leftClicked)
        setFuncs(optionsFunctions)
        return () => {
            window.removeEventListener('mousedown', leftClicked)
        }

    }, [])

    return (
        <div className="dropDrownMenu healthOptionsContainer"
            ref={container}
            onMouseEnter={(e) => setMouseEntered(true)}
            onMouseLeave={() => {
                if (mouseEntered) {
                    setMouseEntered(false)
                    mouseExit(false)
                }
            }
            }
        >
            {menuOptions.map((option, index) => {

                return (<span key={`options-key-${index}`} onClick={() => funcs[index]()}>{option}</span>)
            })}
        </div>
    )
}
