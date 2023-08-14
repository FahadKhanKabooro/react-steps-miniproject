import React from "react";
import { useState } from "react";
import "./index.css";

export default function Practice2() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("august 14 2023");
  date.setDate(date.getDate() + count);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />

        <span>Step: {step}</span>

        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={Number((e) => setCount(e.target.value))}
        />
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
        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
