import React from "react";
import Category from "./Category";

export default function CategoriesList() {
  const categories = ["All", "Data structure", "Graphs", "Databases"];
  return (
    <div>
      <h2 className="text-lg mb-3">Select Category</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat, index) => (
          <Category key={index} name={cat} />
        ))}
      </div>
    </div>
  );
}
