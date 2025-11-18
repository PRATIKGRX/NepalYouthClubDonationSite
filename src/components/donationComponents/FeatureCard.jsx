import { useNavigate } from "react-router-dom";
const FeatureCard = ({
  id,
  victimImage,
  victimName,
  victimDescription,
  progressPercent = 80, // default 80% if not passed
  raisedAmount,
  goalAmount,
}) => {
  const navigate=useNavigate();
  return (
    <>
    <div className="w-full flex justify-center ">
<div className="grid grid-cols-2 md:w-[84%] w-full rounded-[15px] overflow-hidden">
      <div className="bg-[#D9D9D9] h-full w-full relative">
       <button  onClick={()=>navigate(`/donate/${id}`)} className="absolute text-[12px] md:text-[16px] px-3 py-2 rounded-[5px] text-white hover:cursor-p ointer bg-[#DC241F] top-2 right-2 hover:opacity-90 transition">
          DONATE
        </button>
        <img src={victimImage} alt={victimName} className="h-full w-full aspect-[16/9] object-cover" />
      </div>

      <div className="h-full p-2 sm:p-3 border border-[#003893] rounded-r-[15px] flex flex-col justify-between">
        <div className="flex flex-col gap-1 md:gap-4">
          <div className="flex justify-between items-center">
            <p className="2xl:text-2xl sm:text-lg md:text-xl text-sm font-medium">{victimName}</p>
          </div>
          <p className="text-[#878383] font-medium lg:text-[16px] sm:text-[13px] text-[10px] h-[70px] sm:h-[150px] md:h-[180px] overflow-auto">{victimDescription}</p>
        </div>

        <div>
          <p className="2xl:text-2xl sm:text-lg text-[10px] font-medium">
            Requires urgent medical attention
          </p>
          <div className="md:h-[15px] h-[10px] relative w-full rounded-[15px] bg-[#D9D9D9]">
            <div
              className="md:h-[15px] h-[10px] absolute left-0 top-0 rounded-[15px] bg-gradient-to-r from-[#022D73CC] to-[#6196EB66]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="text-medium 2xl:text-2xl sm:text-base text-[10px] flex justify-between items-center">
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
