const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--color-primary)] transition-colors text-white font-[400] px-[24px] py-[21px] rounded-[5px] text-[22px] uppercase hover:cursor-pointer hover:bg-[#8E1B17] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
