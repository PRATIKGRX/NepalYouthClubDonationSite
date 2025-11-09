
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-[5px] text-[12px] lg:px-[15px] lg:py-[12px] lg:text-[22px] flex md:flex hover:cursor-pointer hover:shadow-[4px_4px_5px_0px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      
      {text}
    </button>
  );
};

export default Button;
