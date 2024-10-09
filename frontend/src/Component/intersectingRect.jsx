import React from 'react'

export default function intersectingRect(rect, point) {
    return (rect.left <= point.x && rect.right >= point.x && rect.top <= point.y && rect.bottom >= point.y)
}
