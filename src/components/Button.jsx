const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--color-primary)] transition-colors text-white font-[400] xl:px-[24px] md:px-[18px] px-[8px] xl:py-[21px] md:py-[15px] py-[5px] rounded-[5px] xl:text-[22px] md:text-[16px] text-[10px] uppercase hover:cursor-pointer hover:bg-[#8E1B17] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
