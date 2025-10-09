import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handleprev() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  function handlenext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setisOpen((iso) => !iso)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className="active">1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step:{step} {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={handleprev}
            >
              Previous{" "}
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={handlenext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
