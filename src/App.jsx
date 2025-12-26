import "./App.css";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./Components/Form/Form.jsx";
function App() {
    return (
      <div>
        <nav>
          <img src={logo} className="nav-img" />
          <h1>Investment Calculator</h1>
        </nav>
        <Form />
      </div>
    );
  }

export default App;
