"use client";

const CalculatorButton = ({ label, onClick, type = "number" }) => {
  const baseStyles = "w-[71px] h-[72px] rounded-[24px] text-[32px] leading-[125%] font-normal text-center";
  const textColor = "text-[var(--dark---text)]";

  let bgColor;
  switch (type) {
    case "operator":
      bgColor = "bg-[var(--dark-button-high-emphasis)]";
      break;
    case "function":
      bgColor = "bg-[var(--dark-button-medium-emphasis)]";
      break;
    default:
      bgColor = "bg-[var(--dark-button-low-emphasis)]";
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${bgColor} ${textColor}`}>
      {label}
    </button>
  );
};

export default CalculatorButton;


