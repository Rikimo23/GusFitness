import React, { useEffect, useState } from 'react';
import generator from "../Component/generator";

export default function TrackerTemplate() {
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState(Array(5).fill().map(() => Array(6).fill({ weight: '', reps: '' })));
  const days = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday".split(",")
  const columCategories = "calories,protein,carbs,snack1,snack2,breakfast,lunch,dinner,snack3,fats,fiber,sodium,vitamins,macronutrients".split(",")
  
  // Fetch exercises from the backend on component mount
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/exerciseTrackers'); // Your backend URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  // Handle input change
  const handleChange = (setIndex, cellIndex, field, value) => {
    const updatedData = [...formData];
    updatedData[setIndex][cellIndex][field] = value;
    setFormData(updatedData);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/api/workouts', { // Your backend URL for submission
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Submission successful:', result);
      // Optionally, reset form data or provide feedback
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TableContainer>
        <FirstColumn>
          {generator(6).map((comp) => (
            <input
              type="text"
              placeholder='Exercise name'
              key={`editcell-${comp}`}
              className="editableCells"
            />
          ))}
        </FirstColumn>
        {generator(5).map((entry) => (
          <Set key={`setProp${entry}`} number={entry + 1}>
            {generator(6).map((cell, index) => (
              <PairsOfTwoCells
                key={`pair-of-two-cells-index${index}`}
                setIndex={entry}
                cellIndex={index}
                onChange={handleChange}
              />
            ))}
          </Set>
        ))}
      </TableContainer>
      <TableContainer>
        <FirstColumn
          textRows={{top:"FOODS", bottom: "Names"}}
        >
          {generator(6).map((comp) => (
            <input
              type="text"
              placeholder='Type'
              key={`editcell-${comp}`}
              className="editableCells"
              
            />
          ))}
        </FirstColumn>
          <Set2  title={days[0]}
            cellsText = {{cell1: columCategories[0], cell2: columCategories[1] }}
            >             
              {generatePairsOfCells(6, 0, handleChange, {cell1: "Cals", cell2: "Prot"})}
              
          </Set2>
          <Set2  title={days[1]}
            cellsText = {{cell1: columCategories[2], cell2: columCategories[3] }}
            >
              {generatePairsOfCells(6, 1, handleChange, {cell1: "Carbs", cell2: "Snack"})}
          </Set2>
          <Set2  title={days[2]}
            cellsText = {{cell1: columCategories[4], cell2: columCategories[5] }}
            >
              {generatePairsOfCells(6, 2, handleChange, {cell1: "Snack", cell2: "B.F"})}
          </Set2>
          <Set2  title={days[3]}
            cellsText = {{cell1: columCategories[6], cell2: columCategories[7] }}
            >
              {generatePairsOfCells(6, 3, handleChange, {cell1: "Lunch", cell2: "Dinner"})}
          </Set2>
          <Set2  title={days[4]}
            cellsText = {{cell1: columCategories[8], cell2: columCategories[9] }}
            >
              {generatePairsOfCells(6, 4, handleChange, {cell1: "Snack", cell2: "Fats"})}
          </Set2>
          <Set2  title={days[5]}
            cellsText = {{cell1: columCategories[10], cell2: columCategories[11] }}
            >
              {generatePairsOfCells(6, 5, handleChange, {cell1: "Cals", cell2: "Prot"})}
              
          </Set2>
          <Set2  title={days[6]}
            cellsText = {{cell1: columCategories[12], cell2: columCategories[13] }}
            >
              {generatePairsOfCells(6, 6, handleChange, {cell1: "Cals", cell2: "Prot"})}
              
          </Set2>
        
      </TableContainer>
      <button type="submit" className="submitButton">Submit</button>
    </form>
  );
}

const TableContainer = ({ children }) => {
  return <div className="tableContainer">{children}</div>;
};

const FirstColumn = ({ textRows={top:"Resistance Training", bottom:"Exercise"},children }) => {
  return (
    <div className="firstColumnTable">
      <div>{textRows.top}</div>
      <div>{textRows.bottom}</div>
      {children}
    </div>
  );
};

const Set = ({ number, cellsText={cell1:"Weight", cell2:"Reps"}, children }) => {
  return (
    <div className="setContainer">
      <div className="setTitle">Set: {number}</div>
      <div className="doubleTitleCell">
        <div>{cellsText.cell1}</div>
        <div>{cellsText.cell2}</div>
      </div>
      {children}
    </div>
  );
};
const Set2 = ({ title, cellsText={cell1:"Weight", cell2:"Reps"}, children }) => {
  return (
    <div className="setContainer">
      <div className="setTitle">{title}</div>
      <div className="doubleTitleCell">
        <div>{cellsText.cell1}</div>
        <div>{cellsText.cell2}</div>
      </div>
      {children}
    </div>
  );
};

const PairsOfTwoCells = ({ setIndex, cellIndex, onChange, cellPlaceHolder={cell1: "Weight", cell2:"Reps"} }) => {
  return (
    <div className="editableCellContainer">
      <input
        type="text"
        className="editableCells"
        placeholder={cellPlaceHolder.cell1}
        onChange={(e) => onChange(setIndex, cellIndex, cellPlaceHolder.cell1, e.target.value)}
      />
      <input
        type="text"
        className="editableCells"
        placeholder={cellPlaceHolder.cell2}
        onChange={(e) => onChange(setIndex, cellIndex, cellPlaceHolder.cell2, e.target.value)}
      />
    </div>
  );
};

const generatePairsOfCells =(amount, indexAndCellIndex, handleChange, placeHolderText)=>{
  const newPairs = generator(amount).map((val)=>{
    return(<PairsOfTwoCells  
    key={`newPairOfCells-${val}`}              
    setIndex={indexAndCellIndex}
    cellIndex={indexAndCellIndex}
    onChange={handleChange}
    cellPlaceHolder={placeHolderText}
  />)})
  return newPairs

}
  
