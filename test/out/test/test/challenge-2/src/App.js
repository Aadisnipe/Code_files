import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const stepDown = () => setStep((s) => s - 1);
  const stepUp = () => setStep((s) => s + 1);

  const countDown = () => setCount((c) => c - step);
  const countUp = () => setCount((c) => c + step);

  const getLabel = () => {
    if (count === 0) return "Today is";
    if (count > 0) return `${count} days from today is`;
    return `${Math.abs(count)} days ago was`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div>
        <button onClick={stepDown} style={{ fontSize: "23px" }}>
          -
        </button>{" "}
        Step: <span>{step}</span>{" "}
        <button onClick={stepUp} style={{ fontSize: "23px" }}>
          +
        </button>
      </div>
      <br />
      <div>
        <button onClick={countDown} style={{ fontSize: "23px" }}>
          -
        </button>{" "}
        Count: <span>{count}</span>{" "}
        <button onClick={countUp} style={{ fontSize: "23px" }}>
          +
        </button>
      </div>
      <p>
        {getLabel()} {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
