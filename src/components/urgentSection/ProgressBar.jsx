import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative mt-2">
      <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            progress === 100
              ? "bg-[var(--color-progress-dark)]"
              : "bg-gradient-to-r from-[var(--color-progress-dark)] to-[var(--color-progress-light)]"
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
