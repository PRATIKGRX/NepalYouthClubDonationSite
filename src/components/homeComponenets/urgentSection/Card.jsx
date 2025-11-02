import ProgressBar from "./ProgressBar";
import { formatNumber } from "../../../utils/formatNumber";
import Button from "../../Button";

const Card = ({
  title,
  image,
  raised,
  goal,
  large,
  donateButton = false,
  desc,
}) => {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div
      className={` rounded-t-[15px] overflow-hidden flex flex-col ${
        large ? "md:h-[644px] sm:h-[500px] h-[400px]" : "h-[318px] w-full"
      }`}
    >
      <div
        className={`relative group rounded-[15px] bg-gray-300 h-full w-full flex justify-end`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`absolute ${
            large ? "p-12 pt-24" : "p-6 pt-12"
          } w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-b from-transparent to-zinc-800 transition-all duration-500`}
        >
          <p
            className={`w-full h-full text-white break-words text-justify ${
              large ? "text-xl line-clamp-[12]" : "text-xs line-clamp-6"
            } line`}
          >
            {desc}
          </p>
        </div>
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
