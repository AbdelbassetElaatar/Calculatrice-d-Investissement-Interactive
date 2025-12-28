import { useState } from 'react';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const resetHandler = () => {
    setUserInput(null);
  };

  const yearlyData = []; 

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Form onCalculate={calculateHandler} onReset={resetHandler} />

      {!userInput && <p style={{textAlign: 'center'}}>No Data available.</p>}
      {userInput && <Table data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App
