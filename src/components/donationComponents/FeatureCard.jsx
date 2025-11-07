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
<div className="grid grid-cols-2 h-[350px] w-[84%] rounded-[15px] overflow-hidden">
      <div className="bg-[#D9D9D9] h-full">
        <img src='' alt={victimName} className="h-full w-full object-cover" />
      </div>

      <div className="h-full p-3 border border-[#003893] rounded-r-[15px] flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-[24px] font-medium">{victimName}</p>
            <p className="text-[20px] text-[#7D7C7C]">{victimStatus}</p>
          </div>
          <p className="text-[#878383] font-medium text-[20px]">{victimDescription}</p>
        </div>

        <div>
          <p className="text-[24px] font-medium">
            Requires urgent medical attention
          </p>
          <div className="h-[15px] relative w-full rounded-[15px] bg-[#D9D9D9]">
            <div
              className="h-[15px] absolute left-0 top-0 rounded-[15px] bg-gradient-to-r from-[#022D73CC] to-[#6196EB66]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="text-medium flex justify-between items-center">
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
