import {React, useEffect, useState} from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import TrackerTemplate from '../Component/TrackerTemplate'
 
export default function TrackerPage() {
  const sets = ["Set: 1", "Set: 2", "Set: 3", "Set: 4", "Set: 5"]
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="pageMainTitle">Exercise Tracker</div>
        <TrackerTemplate />
        <TrackerTemplate />
        <TrackerTemplate />
        <TrackerTemplate />
        <TrackerTemplate />
      </WrapperComponent>

    </>
  )
}

