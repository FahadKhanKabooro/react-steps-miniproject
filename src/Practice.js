import React, { useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("august 14 2023");
  date.setDate(date.getDate() + count);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <div>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setStep((c) => c - 1)}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setStep((c) => c + 1)}
        >
          +
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
        <br />
        <p
          style={{
            backgroundColor: "yellow",
            color: "black",
            fontSize: "30px",
          }}
        >
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
