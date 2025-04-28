"use client";
const CalculatorButton = ({ label, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-[71px] h-[72px] rounded-[24px] bg-[var(--dark-button-low-emphasis)] text-[32px] leading-[125%] font-normal text-[var(--dark---text)] text-center`}
  >
    {label}
  </button>
);

export default CalculatorButton;

