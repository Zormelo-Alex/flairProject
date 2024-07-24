import React from "react";

const ProgressBar = ({ progress }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="flex justify-center items-center relative w-[56px] h-[56px]">
      <svg
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
      >
        <circle
          className="text-[#6CB69B]"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-white"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          style={{ transition: 'stroke-dashoffset 0.35s' }}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute text-sm text-white">
        {`${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
