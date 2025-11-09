
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--color-primary)] text-white px-[15px] py-[12px] rounded-[5px] text-[22px] flex hover:cursor-pointer hover:shadow-[4px_4px_5px_0px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
