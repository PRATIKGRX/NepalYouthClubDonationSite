import ProgressBar from "./ProgressBar";
import { formatNumber } from "../../../utils/formatNumber";
import Button from "../../Button";

const Card = ({ title, image, raised, goal, large, donateButton = false }) => {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div
      className={`rounded-t-[15px] overflow-hidden flex flex-col ${
        large ? "md:h-[644px] sm:h-[500px] h-[400px]" : "h-[318px] w-full"
      }`}
    >
      <div
        className={`rounded-[15px] bg-gray-300 h-full w-full flex justify-end`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`  ${
            large
              ? "h-[70px] md:h-[75px] md:w-[130px] w-[125px]"
              : "h-[40px] w-[70px]"
          } rounded-bl-xl bg-white`}
        ></div>
        <Button
          onClick={() => alert("Under Development")}
          text={"Donate"}
          className={`absolute ${
            large ? "!p-4" : "!text-[11px] !px-[10px] !py-[9px]"
          }  w-min h-min `}
        />
      </div>

      <div className="py-4">
        <div className="flex justify-between items-center my-3.5">
          <h3
            className={`${
              large ? "md:text-3xl" : "md:text-2xl"
            } font-bold leading-5 uppercase mb-2`}
          >
            {title}
          </h3>
          <div className={`${!large && "hidden"} font-medium text-xl`}>
            Goal: {formatNumber(raised)}
          </div>
        </div>
        <ProgressBar progress={progress} />
        <p className="text-xl font-semibold mt-2">
          {formatNumber(raised)} raised
        </p>
      </div>
    </div>
  );
};

export default Card;
