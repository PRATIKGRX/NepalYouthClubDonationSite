const Card = ({title,description}) => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-8">
        <p className="text-[64px] font-semibold border-l-[15px] border-[#DC241F] text-[#003893] h-[140px] px-6 flex items-center">{title}</p>
        <p className="text-[24px] font-light border-l-2  pl-6 pr-12 py-5 border-[#333333] ml-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
