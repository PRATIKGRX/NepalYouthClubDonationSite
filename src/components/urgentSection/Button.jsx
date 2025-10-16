import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--color-primary)] transition-colors text-white font-[400] px-[42px] py-[23px] rounded-[5px] text-[22px] uppercase"
    >
      {text}
    </button>
  );
};

export default Button;
