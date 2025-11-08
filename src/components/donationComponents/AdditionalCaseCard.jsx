const AdditionalCaseCard = ({
  victimName,
  imageSrc,
  raisedAmount,
  goalAmount,
  progressPercent,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Image and Donate Button */}
      <div className="bg-[#D9D9D9] relative h-[275px] w-full rounded-[10px] overflow-hidden">
        <button className="absolute text-[16px] px-3 py-2 rounded-[5px] text-white bg-[#DC241F] top-2 right-2 hover:opacity-90 transition">
          DONATE
        </button>
        <img
          src={imageSrc}
          alt={victimName}
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      {/* Text and Progress */}
      <div className="flex flex-col gap-2">
        <p className="text-[24px] font-medium">Support for {victimName}</p>

        <div className="flex flex-col gap-1">
          {/* Progress Bar */}
          <div className="h-[15px] relative w-full rounded-[15px] bg-[#D9D9D9] overflow-hidden">
            <div
              className="h-[15px] absolute left-0 top-0 rounded-[15px] bg-gradient-to-r from-[#022D73CC] to-[#6196EB66]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Raised and Goal */}
          <div className="text-medium flex justify-between items-center">
            <p>Raised {raisedAmount}</p>
            <p className="text-[#7D7C7C]">Goal: {goalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCaseCard;
