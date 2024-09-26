import React from 'react'
import generator from "../Component/generator"

export default function TrackerTemplate() {
  return (
    <TableContainer>
    <FirstColumn>
      {generator(6).map((comp)=>{
        return (
          <div
         key={`editcell-${comp}`}
         className="editableCells"
         >{comp}</div>
        )
      })}
    </FirstColumn>
    {generator(5).map((entry)=>{
      return(
        <Set key={`setProp${entry}`}
          number={entry+1}
        >{
          generator(6).map((cell)=>{
            return(
              <div 
              key={`edit-cells-${cell}`}
              className="editableCells">{
                <PairsOfTwoCells />
              }</div>
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
        <div>EXERCISE</div>
        <div>{children}</div>
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
        <div>{children}</div>
      </div>
    )
  }
  
  const PairsOfTwoCells=()=>{  
    return(
      <div className="editableCellContainer">
        <div className="editableCells">0</div>
        <div className="editableCells">1</div>
      </div>
    )
  }