import React from "react";
import { FaCrown, FaMedal, FaAward } from "react-icons/fa";

const rankIcons = [FaCrown, FaMedal, FaAward];

const CoderCard = ({ coder, rank }) => {
  const { first_name, last_name, avatar_url, score } = coder;
  const Icon = rankIcons[rank] || FaAward;

  return (
    <div className="flex items-center gap-4 p-3 rounded shadow-sm bg-white dark:bg-gray-800 dark:text-white">
      <img
        src={avatar_url}
        alt={`${first_name} ${last_name}`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="font-semibold">
          {first_name} {last_name}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-300">
          Score: {score}
        </div>
      </div>
      <Icon className="text-yellow-500 text-xl" title={`Rank #${rank + 1}`} />
    </div>
  );
};

export default CoderCard;
