"use client";
const CalculatorButton = ({ label, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-blue-200 hover:bg-blue-300 text-xl p-4 rounded ${className}`}
  >
    {label}
  </button>
);

export default CalculatorButton;

