import React from "react";

export default function Category({ name }) {
  return (
    <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 cursor-pointer">
      {name}
    </div>
  );
}
