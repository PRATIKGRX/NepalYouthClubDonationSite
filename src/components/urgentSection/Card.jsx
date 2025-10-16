import React from "react";
import ProgressBar from "./ProgressBar";
import { formatNumber } from "../../utils/formatNumber";

const Card = ({ title, image, raised, goal, large }) => {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div
      className={`rounded-t-[15px] overflow-hidden flex flex-col ${
        large ? "h-full" : "h-[318px] w-full"
      }`}
    >
      <div
        className={`rounded-[15px] bg-gray-300 h-full w-full`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="py-4">
        <div className="flex justify-between items-center my-3.5">
          <h3
            className={`${
              large ? "text-3xl" : "text-2xl"
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
