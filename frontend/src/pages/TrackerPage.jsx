import React from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
export default function TrackerPage() {
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div>

          <table>
            <caption>Exercise Tracker</caption>
            <thead>
              <TableRow>
                {[
                  "Resistance Training", "Set: 1", "Set: 2", "Set: 3", "Set: 4", "Set: 5"]}
              </TableRow>
              <TableRow>
                {["Exercise", "Weight", "Reps", "Weight", "Reps", "Weight", "Reps", "Weight", "Reps", "Weight", "Reps"]}
              </TableRow>            
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>

          </table>

        </div>
      </WrapperComponent>

    </>
  )
}
const Table = ({ children }) => {
  return (<table>{children}</table>)
}
const FillOutForm = ({ }) => {
  return (
    <div className="tableFillOutHeader">
      <div>
        <label>Date:</label>
        <input type="text" />
      </div>
      <div>
        <label>Total Workout Time:</label>
        <input type="text" />
      </div>
      <div>
        <label>Muscle Group:</label>
        <input type="text" />
      </div>
    </div>
  )
}
const CardioTable = () => {
  return (
    <div>
      <div>
        <label>Date:</label>
        <input type="text" />
      </div>
      <Table>
        <thead>
          <TableRow>{["Exercise", "Duration", "Speed", "Distance"]}</TableRow>
        </thead>
        <tbody>
          <TableRow>{["","", "", ""]}</TableRow>
        </tbody>
      </Table>
    </div>
  )
}

const TableRow = ({ children }) => {
  return (
    <tr>
      {children.map((th, index) => {
        return <th key={`th-index${index}`}>{th}</th>
      })}
    </tr>
  )
}