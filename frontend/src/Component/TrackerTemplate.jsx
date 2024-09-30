import React from 'react'
import generator from "../Component/generator"

export default function TrackerTemplate() {
  return (
    <TableContainer>
    <FirstColumn>
      {generator(6).map((comp)=>{
        return (
          <input type="text"
          placeholder='exercise name'
         key={`editcell-${comp}`}
         className="editableCells"
         ></input>
        )
      })}
    </FirstColumn>
    {generator(5).map((entry)=>{
      return(
        <Set key={`setProp${entry}`}
          number={entry+1}
        >{
          generator(6).map((cell, index)=>{
            return(              
                <PairsOfTwoCells key={`pair-of-two-cells-index${index}`} />             
            )
          })
        }</Set>
      )
    })}
  </TableContainer>
  )
}


const TableContainer=({children})=>{
    return(
      <div className="tableContainer">{children}</div>
    )
  }
  const FirstColumn =({children})=>{
    return(
      <div className="firstColumnTable">
        <div>Resistance Training</div>
        <div>Exercise</div>
        {children}        
      </div>
    )
  }
  const Set=({number, children})=>{
    return(
      <div className="setContainer">
        <div className="setTitle">Set: {number}</div>
        <div className="doubleTitleCell">
          <div>Weight</div>
          <div>Reps</div>
        </div>
        {children}
      </div>
    )
  }
  
  const PairsOfTwoCells=()=>{  
    return(
      <div className="editableCellContainer">
        <input type="text" className="editableCells" placeholder="0"></input>
        <input type="text" className="editableCells" placeholder="0"></input>
      </div>
    )
  }