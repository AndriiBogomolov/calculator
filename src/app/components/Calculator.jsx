"use client";

import React, { useState } from "react";
import CalculatorButton from "./buttons/CalculatorButton";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput("");
  const handleResult = () => {
    try {
      setInput(eval(input).toString()); // ❗ eval — timely, need to change later
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4 text-right text-2xl font-mono bg-white p-4 rounded">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "=", "+"].map((btn) => (
          <CalculatorButton
            key={btn}
            label={btn}
            onClick={
              btn === "=" ? handleResult :
              btn === "C" ? handleClear :
              () => handleClick(btn)
            }
          />
        ))}
        <CalculatorButton label="C" onClick={handleClear} className="col-span-4 bg-red-300" />
      </div>
    </div>
  );
};

export default Calculator;

