import { useState } from "react";
import "./App.css";

import logo from "./assets/investment-calculator-logo.png";

function App() {
  return (
    <>
      <nav>
        <img src={logo} className="nav-img" />
        <h1>Investment Calculator</h1>
      </nav>
    </>
  );
}

export default App;
