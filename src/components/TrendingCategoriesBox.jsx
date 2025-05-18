import React from "react";

const trendingCategories = [
  { category: "Graphs", count: 100 },
  { category: "Stacks", count: 45 },
  { category: "Algorthims", count: 20 },
  { category: "Databases", count: 3 },
];

export default function TrendingCategoriesBox() {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Trending Categories
      </h2>
      <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-gray-200 rounded">
        {trendingCategories.map((item, index) => (
          <div key={index}>
            <span className="text-gray-800">{item.category}</span>
            <span className="bg-teal-400 text-white text-xs font-bold px-2 py-1 rounded-full">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
