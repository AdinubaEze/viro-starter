import React from "react";

const CircleProgress = ({ color, count, total }) => {
  const percent = Math.round((count / total) * 100);
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18"
        cy="18"
        r="8.915"
        fill="none"
        stroke="rgb(var(--ui-secondary))"
        strokeWidth="6.8"
      />
      <circle
        cx="18"
        cy="18"
        r="8.915"
        fill="none"
        stroke={color}
        strokeWidth="5.2"
        strokeDasharray={percent + ",100"}
        strokeLinecap="round"
      />
      <text
        x="18"
        y="18"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="5"
        fill={color}
      >
        {percent}%
      </text>
    </svg>
  );
};

export default CircleProgress;
