import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";

const challenges = [
  {
    id: 145,
    title: "Two-sum",
    category: "Data structure",
    Difficulty: "Easy",
    status: "Completed",
    solutionRate: "45%",
  },
  {
    id: 146,
    title: "Fibonatci series",
    category: "Data structure",
    Difficulty: "Moderate",
    status: "Attempted",
    solutionRate: "45%",
  },
  {
    id: 147,
    title: "Skyline problem",
    category: "Data structure",
    Difficulty: "Moderate",
    status: "Pending",
    solutionRate: "45%",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return (
        <BsCheck2Circle
          className="text-green-600"
          title="You have completed this challenge"
        />
      );

    case "Attempted":
      return (
        <LuFileSpreadsheet
          className="text-yellow-500"
          title="You have attempted this challenge"
        />
      );

    case "Pending":
      return (
        <FaRegHourglass
          className="text-gray-500"
          title="You haven’t started this challenge yet"
        />
      );

    default:
      return null;
  }
};

export default function ChallengesList() {
  return (
    <div className="py-4">
      <div className="overflow-x-auto max-h-[400px] border rounded-lg shadow">
        <table className="min-w-full table-auto text-left text-sm text-gray-800 dark:text-gray-100">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Difficulty</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Solution Rate</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((challenge) => (
              <tr key={challenge.id} className="border-t">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(challenge.status)}
                    <span className="sr-only">{challenge.status}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{challenge.id}</td>
                <td className="px-4 py-2">{challenge.title}</td>
                <td className="px-4 py-2">{challenge.category}</td>
                <td>{challenge.Difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
