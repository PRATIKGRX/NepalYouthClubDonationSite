const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--color-primary)] text-white px-3 py-2 md:px-[15px] md:py-[12px] rounded-[5px] md:text-[22px] text-[10px] flex hover:cursor-pointer hover:shadow-[4px_4px_5px_0px_rgba(0,0,0,0.4)] transition-all duration-300 ${className}`}
    >
      <span className="text-center w-full">{text}</span>
    </button>
  );
};

export default Button;
