const Card = ({title,description}) => {
  return (
    <div>
      <div className="flex flex-col justify-center xl:gap-8 md:gap-6 gap-4">
        <p className="xl:text-[64px] md:text-[46px] sm:text-[32px] text-[24px] font-semibold xl:border-l-[15px] md:border-l-[10px] border-l-[8px] border-[#DC241F] text-[#003893] xl:h-[140px] md:h-[100px] h-[70px] px-6 flex items-center">{title}</p>
        <p className="xl:text-[24px] md:text-[16px] text-[12px] font-light border-l-2  xl:pl-6 pl-4 md:pl-5 pr-12 md:py-5 border-[#333333] xl:ml-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
