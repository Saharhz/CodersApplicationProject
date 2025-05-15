import React from "react";
import { data as leaderboardData } from "../data.js";
import { useParams } from "react-router-dom";
import DarkMode from "../hooks/DarkMode";

export default function Leaderboard() {
  const { id } = useParams();

  return (
    <div className="p-6 bg-[#CBd5E1] dark:bg-[#4322C9A3]">
      <DarkMode />
      <h2 className="text-xl font-light mb-3">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead className="border border-gray-200 font-semibold">
            <tr>
              <th className="px-4 py-2 border-b">Rank</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Score</th>
              <th className="px-4 py-2 border-b">Solved Challenges</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800 dark:text-gray-50">
            {leaderboardData.map((entry) => (
              <tr key={entry.rank}>
                <td className="px-4 py-2 border-b">{entry.rank}</td>
                <td className="px-4 py-2 border-b">
                  {entry.first_name}
                  {entry.last_name}
                </td>
                <td className="px-4 py-2 border-b">{entry.score}</td>
                <td className="px-4 py-2 border-b">
                  {entry.solved_challenges}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
