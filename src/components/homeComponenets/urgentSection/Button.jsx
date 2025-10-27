
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--color-primary)] transition-colors text-white font-[400] px-[42px] py-[20px] rounded-[5px] text-[22px] uppercase hover:cursor-pointer "
    >
      {text}
    </button>
  );
};

export default Button;
