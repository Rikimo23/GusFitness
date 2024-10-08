import { React, useState, useEffect, useRef } from 'react'

export default function DropDownMenu({ mouseExit, menuOptions = [], optionsFunctions = [] }) {
    // mouseEntered lets the user interface know that the current menu is being hovered
    const [mouseEntered, setMouseEntered] = useState(false)
    // funcs are the functions that each button/element will use when clicked.
    const [funcs, setFuncs] = useState([])
    const container = useRef(null)

    /* This useEffect hook is used for checking if the mouse has entered the element using its bounding box. 
    This way we can make sure we're closing the menu when it's not being hovered/used.*/
    useEffect(() => {
        // check for bounding box intersection between a point and the rectangle box of the element
        const intersectingRect = (rect, point) => {
            return (rect.left <= point.x && rect.right >= point.x && rect.top <= point.y && rect.bottom >= point.y)
        }
        const leftClicked = (e) => {
            if (container.current &&
                // if the mouse is no longer intersecting the menu element, set mouseEntered and mouseExit to false
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
            {/* Create a span element for each one of the menu entries, and give it its own function */}
            {menuOptions.map((option, index) => {

                return (<span key={`options-key-${index}`} onClick={() => funcs[index]()}>{option}</span>)
            })}
        </div>
    )
}
