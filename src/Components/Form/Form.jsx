import React, { useState } from 'react';
import './Form.css';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 10,
  'duration': 10,
};

function Form(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  // Gère la soumission du formulaire
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput); // Envoie les données à App.jsx
  };

  // Réinitialise le formulaire
  const resetHandler = () => {
    setUserInput(initialUserInput);
    props.onReset(); // Informe App de vider les résultats
  };

  // Met à jour l'état local à chaque saisie
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value, // Le "+" convertit le texte en nombre pour les calculs
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
        <div>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => inputChangeHandler('current-savings', event.target.value)}
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </div>
        <div>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)}
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </div>
        <div>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            onChange={(event) => inputChangeHandler('expected-return', event.target.value)}
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </div>
        <div>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => inputChangeHandler('duration', event.target.value)}
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </div>
      <div>
        <button type="button" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </div>
    </form>
  );
}

export default Form;