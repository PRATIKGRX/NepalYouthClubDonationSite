const FeatureCard = ({
  victimImage,
  victimName,
  victimStatus,
  victimDescription,
  progressPercent = 80, // default 80% if not passed
  raisedAmount,
  goalAmount,
}) => {
  return (
    <>
    <div className="w-full flex justify-center ">
<div className="grid grid-cols-2 lg:h-[350px] lg:aspect-auto aspect-video md:w-[84%] w-full rounded-[15px] overflow-hidden">
      <div className="bg-[#D9D9D9] h-full">
        <img src={victimImage} alt={victimName} className="h-full w-full object-cover" />
      </div>

      <div className="h-full p-2 sm:p-3 border border-[#003893] rounded-r-[15px] flex flex-col justify-between">
        <div className="flex flex-col gap-1 md:gap-4">
          <div className="flex justify-between items-center">
            <p className="md:text-[24px] text-[16px] font-medium">{victimName}</p>
          </div>
          <p className="text-[#878383] font-medium text-[11px] md:text-[20px]">{victimDescription}</p>
        </div>

        <div>
          <p className="lg:text-[24px] sm:text-[13px] text-[11px] font-medium">
            Requires urgent medical attention
          </p>
          <div className="md:h-[15px] h-[10px] relative w-full rounded-[15px] bg-[#D9D9D9]">
            <div
              className="md:h-[15px] h-[10px] absolute left-0 top-0 rounded-[15px] bg-gradient-to-r from-[#022D73CC] to-[#6196EB66]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="text-medium md:text-base text-[9px] flex justify-between items-center">
            <p>Raised {raisedAmount}</p>
            <p className="text-[#7D7C7C]">Goal: {goalAmount}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default FeatureCard;
