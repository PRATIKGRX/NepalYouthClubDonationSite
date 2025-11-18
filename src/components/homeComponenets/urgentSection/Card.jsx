import ProgressBar from "./ProgressBar";
import { formatNumber } from "../../../utils/formatNumber";
import UrgentButton from "./UrgentButton";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, image, raised, goal, desc }) => {
  const progress = Math.min((raised / goal) * 100, 100);
  const navigate = useNavigate();

  return (
    <div className="rounded overflow-hidden flex flex-col h-full w-full">
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
          className="absolute w-full h-full overflow-hidden no-scrollbar 
          opacity-0 rounded-[8px] xl:px-6 md:px-4 px-2 md:pt-[62px] sm:pt-[42px] pt-[40px] group-hover:opacity-100 
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
          h-[40px] w-[70px] 
          sm:h-[42px] sm:w-[85px] 
          md:h-[62px] md:w-[100px] 
          rounded-bl-[3px] md:rounded-bl-[5px] bg-white relative"
        ></div>

        {/* Donate Button */}
        <UrgentButton
          onClick={() => navigate(`/donate/${id}`)}
          text={"Donate"}
          className="absolute !text-[11px] sm:!text-sm md:!text-base 
            !px-[10px] !py-[9px] sm:!px-3 sm:!py-2 md:!p-4 
            w-min h-min"
        />
      </div>

      {/* Bottom Section */}
      <div className="py-4">
        <div className="flex justify-between flex-wrap items-center">
          <h3 className="font-semibold 2xl:text-2xl sm:text-lg text-sm uppercase ">
            {title}
          </h3>
        </div>

        <ProgressBar progress={progress} />

        <div className="flex mt-1 md:mt-2 w-full justify-between items-center">
          <p className="2xl:text-2xl sm:text-xl text-xs font-semibold">
            {formatNumber(raised)} raised
          </p>
          <p className="2xl:text-2xl sm:text-xl text-xs font-semibold">
            Goal: {formatNumber(goal)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
