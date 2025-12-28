import React, { useState } from "react";
import "./Form.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1000,
  "expected-return": 10,
  duration: 10,
};

function Form(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
    props.onReset();
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group column">
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          onChange={(event) =>
            inputChangeHandler("current-savings", event.target.value)
          }
          value={userInput["current-savings"]}
          type="number"
          id="current-savings"
        />
      </div>
      <div className="input-group column">
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          onChange={(event) =>
            inputChangeHandler("yearly-contribution", event.target.value)
          }
          value={userInput["yearly-contribution"]}
          type="number"
          id="yearly-contribution"
        />
      </div>
      <div className="input-group column">
        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
        <input
          onChange={(event) =>
            inputChangeHandler("expected-return", event.target.value)
          }
          value={userInput["expected-return"]}
          type="number"
          id="expected-return"
        />
      </div>
      <div className="input-group column">
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          onChange={(event) =>
            inputChangeHandler("duration", event.target.value)
          }
          value={userInput["duration"]}
          type="number"
          id="duration"
        />
      </div>

      <div className="button-row">
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
