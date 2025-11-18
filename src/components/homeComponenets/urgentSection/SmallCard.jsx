import ProgressBar from "./ProgressBar";
import { formatNumber } from "../../../utils/formatNumber";
import UrgentButton from "./UrgentButton";
import { useNavigate } from "react-router-dom";

const SmallCard = ({ id, title, image, raised, goal, desc }) => {
  const progress = Math.min((raised / goal) * 100, 100);
  const navigate = useNavigate();

  return (
    <div className="rounded flex flex-col h-full w-full">
      <div
        className="relative group rounded-[8px] bg-gray-300  w-full flex justify-end aspect-[16/9] h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hover Description */}
        <div
          className="absolute w-full h-full overflow-hidden no-scrollbar overflow-y-scroll 
          opacity-0 rounded-[8px] xl:p-4 md:p-2 xl:pt-[54px] md:pt-[46px] pt-[30px] group-hover:opacity-100 
          group-hover:bg-gradient-to-b from-transparent to-zinc-800 
          transition-all duration-500"
        >
          <p
            className="w-full h-full text-white break-words text-justify
            xl:text-sm md:text-xs 
            "
          >
            {desc}
          </p>
        </div>

        {/* White Box Bottom Right */}
        <div
          className="
          h-[28px] w-[50px] 
          sm:h-[30px] sm:w-[64px] 
           md:h-[46px] md:w-[78px] 
          xl:h-[54px] xl:w-[85px] 
          rounded-bl-[3px] md:rounded-bl-[5px] bg-white relative"
        ></div>

        {/* Donate Button */}
        <UrgentButton
          onClick={() => navigate(`/donate/${id}`)}
          text={"Donate"}
          className="absolute !text-[9px] sm:!text-[11px] md:!text-xs 
            !px-[6px] !py-[5px] sm:!px-2 sm:!py-1 md:!p-3 xl:!p-4 
            w-min h-min"
        />
      </div>

      {/* Bottom Section */}
      <div className="py-4">
        <div className="flex justify-between flex-wrap items-center">
          <h3 className="font-semibold 2xl:text-xl sm:text-sm text-xs uppercase ">
            {title}
          </h3>
        </div>

        <ProgressBar progress={progress} />

        <div className="flex mt-1 md:mt-2 w-full justify-between items-center">
          <p className="2xl:text-lg sm:text-sm text-[10px] font-semibold">
            {formatNumber(raised)} raised
          </p>
          <p className="2xl:text-lg sm:text-sm text-[10px] font-semibold">
            Goal: {formatNumber(goal)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
