import React from "react";

export default function ChallengeStats({ data }) {
  const getPercentage = (solved, total) =>
    total > 0 ? Math.round((solved / total) * 100) : 0;

  const colorMap = {
    easy: "bg-green-500",
    moderate: "bg-orange-500",
    hard: "bg-red-500",
  };

  return (
    <div className="w-full max-w-xs p-4 border rounded-lg shadow">
      <h1 className="text-lg font-semibold mb-4 text-center">
        Completed Challenges
      </h1>
      {Object.entries(data).map(([difficulty, { solved, total }]) => {
        const percent = getPercentage(solved, total);
        const barColor = colorMap[difficulty] || "bg-gray-400";
        return (
          <div key={difficulty} className="mb-4">
            <div className="flex justify-between text-sm font-medium mb-1">
              <span className="capitalize text-center">{difficulty}</span>
              <span>
                {solved} / {total} ({percent}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className={`h-3 rounded-full ${barColor}`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
