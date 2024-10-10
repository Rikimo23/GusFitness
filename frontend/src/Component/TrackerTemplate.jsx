import React, { useEffect, useState } from 'react';
import generator from "../Component/generator";

export default function TrackerTemplate() {
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState(Array(5).fill().map(() => Array(6).fill({ weight: '', reps: '' })));
  const [foodData, setFoodData] = useState({
    calories: '', protein: '',  carbs: '',  fats: '',  snack1: '',
    snack2: '', breakfast: '', lunch: '', dinner: '',  snack3: ''
  });
  const days = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday".split(",");
  const columCategories = "calories,protein,carbs,snack1,snack2,breakfast,lunch,dinner,snack3,fats,fiber,sodium,vitamins,macronutrients".split(",");

  // Handle input change for exercises
  const handleChange = (setIndex, cellIndex, field, value) => {
    const updatedData = [...formData];
    updatedData[setIndex][cellIndex][field] = value;
    setFormData(updatedData);
  };

  // Handle input change for food
  const handleFoodChange = (field, value) => {
    setFoodData({
      ...foodData,
      [field]: value
    });
  };

  //Handle exerciseName change
  const handleExerciseNameChange = (index, value) => {
    setExercises((prev) => {
      const updatedExercises = [...prev];
      updatedExercises[index] = value;
      return updatedExercises;
    });
  }


  // Handle form submission for exercises
  const handleSubmit = (event) => {
    event.preventDefault();
    let isSignedIn;
    if(localStorage.getItem("loggedIn") === undefined) isSignedIn = undefined
    else isSignedIn = localStorage.getItem("loggedIn") === "true"
   
    const updateTrackerData = async()=>{
      try {
        const exerciseTrackers = formData.flat().map((data, index) => ({
          exerciseName: exercises[index], // Adjust this as needed
          sets: index + 1, // Assign the set number to sets
          reps: data.reps, // Extract reps from the data
          weight: data.weight, // Extract weight from the data
          user: { id: localStorage.getItem("userId") } 
        }));
  
        const response = await fetch(`http://localhost:8081/api/exerciseTrackers/${exerciseTrackers.user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(exerciseTrackers),
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
    }
    if(!isSignedIn) alert("WARNING!!\nYou must sign in to upload this data.")
    else updateTrackerData()
    
  };

  const handleFoodSubmit = (event) => {
    event.preventDefault();
    const updateFoodData = async()=>{
      try {
        // Create an object with all the food data needed
        const foodPayload = {
          calories: parseInt(foodData.calories, 10),
          protein: parseInt(foodData.protein, 10),
          carbs: parseInt(foodData.carbs, 10),
          fats: parseInt(foodData.fats, 10),
          snack1: foodData.snack1,
          snack2: foodData.snack2,
          breakfast: foodData.breakfast,
          lunch: foodData.lunch,
          dinner: foodData.dinner,
          snack3: foodData.snack3,
          user: { id: parseInt(localStorage.getItem("userId")) } // Assuming user ID , adjust as needed
        };
    
        console.log('Submitting food data:', foodPayload); // Log the payload
    
        const response = await fetch(`http://localhost:8081/api/nutritions/users/${foodPayload.user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(foodPayload),
        });
    
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
        }
    
        const result = await response.json();
        console.log('Food submission successful:', result);
        // Optionally, reset form data or provide feedback
      } catch (error) {
        console.error('Error submitting food data:', error);
        alert(`Error submitting food data: ${error.message}`);
      }
    }
    updateFoodData()
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TableContainer>
          <FirstColumn>
            {generator(6).map((comp, index) => (
              <input
                type="text"
                placeholder='Exercise name'
                key={`editcell-${comp}`}
                className="editableCells"
                onChange={(e) => handleExerciseNameChange(index, e.target.value)}
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
        <button type="submit" className="submitButton">Submit</button>
      </form>
      <form onSubmit={handleFoodSubmit}>
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
                onChange={(e) => handleFoodChange(columCategories[comp], e.target.value)}
              />
            ))}
          </FirstColumn>
          <Set2 title={days[0]} cellsText={{ cell1: columCategories[0], cell2: columCategories[1] }}>
            {generatePairsOfCells(6, 0, handleChange, { cell1: "Cals", cell2: "Prot" })}
          </Set2>
          <Set2 title={days[1]} cellsText={{ cell1: columCategories[2], cell2: columCategories[3] }}>
            {generatePairsOfCells(6, 1, handleChange, { cell1: "Carbs", cell2: "Snack" })}
          </Set2>
          <Set2 title={days[2]} cellsText={{ cell1: columCategories[4], cell2: columCategories[5] }}>
            {generatePairsOfCells(6, 2, handleChange, { cell1: "Snack", cell2: "B.F" })}
          </Set2>
          <Set2 title={days[3]} cellsText={{ cell1: columCategories[6], cell2: columCategories[7] }}>
            {generatePairsOfCells(6, 3, handleChange, { cell1: "Lunch", cell2: "Dinner" })}
          </Set2>
          <Set2 title={days[4]} cellsText={{ cell1: columCategories[8], cell2: columCategories[9] }}>
            {generatePairsOfCells(6, 4, handleChange, { cell1: "Snack", cell2: "Fats" })}
          </Set2>
          <Set2 title={days[5]} cellsText={{ cell1: columCategories[10], cell2: columCategories[11] }}>
            {generatePairsOfCells(6, 5, handleChange, { cell1: "Cals", cell2: "Prot" })}
          </Set2>
          <Set2 title={days[6]} cellsText={{ cell1: columCategories[12], cell2: columCategories[13] }}>
            {generatePairsOfCells(6, 6, handleChange, { cell1: "Cals", cell2: "Prot" })}
          </Set2>
        </TableContainer>
        <button type="submit" className="submitButton">Submit Food</button>
      </form>
    </>
  );
}

const TableContainer = ({ children }) => {
  return <div className="tableContainer">{children}</div>;
};

const FirstColumn = ({ textRows = { top: "Resistance Training", bottom: "Exercise" }, children }) => {
  return (
    <div className="firstColumnTable">
      <div>{textRows.top}</div>
      <div>{textRows.bottom}</div>
      {children}
    </div>
  );
};

const Set = ({ number, cellsText = { cell1: "Weight", cell2: "Reps" }, children }) => {
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

const Set2 = ({ title, cellsText = { cell1: "Weight", cell2: "Reps" }, children }) => {
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

const PairsOfTwoCells = ({ setIndex, cellIndex, onChange, cellPlaceHolder = { cell1: "Weight", cell2: "Reps" } }) => {
  return (
    <div className="editableCellContainer">
      <input
        type="text"
        className="editableCells"
        placeholder={cellPlaceHolder.cell1}
        onChange={(e) => onChange(setIndex, cellIndex, 'weight', e.target.value)}
      />
      <input
        type="text"
        className="editableCells"
        placeholder={cellPlaceHolder.cell2}
        onChange={(e) => onChange(setIndex, cellIndex, 'reps', e.target.value)}
      />
    </div>
  );
};

const generatePairsOfCells = (amount, indexAndCellIndex, handleChange, placeHolderText) => {
  const newPairs = generator(amount).map((val) => {
    return (
      <PairsOfTwoCells
        key={`newPairOfCells-${val}`}
        setIndex={indexAndCellIndex}
        cellIndex={indexAndCellIndex}
        onChange={handleChange}
        cellPlaceHolder={placeHolderText}
      />
    );
  });
  return newPairs;
};