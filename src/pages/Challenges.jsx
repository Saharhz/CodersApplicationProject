import React from "react";
import CategoriesList from "../components/CategoriesList";
import ChallengesList from "../components/ChallengesList";
import TrendingCategoriesBox from "../components/TrendingCategoriesBox";
import TopKCodersList from "../components/TopKCodersList";

export default function Challenges() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl mb-4">Challenges</h1>
      <div className="flex gap-8">
        <div className="flex-1 space-y-6">
          <CategoriesList />
          <ChallengesList />
        </div>
        <div className="w-[250px] shrink-0 space-y-6">
          <TrendingCategoriesBox />
          <TopKCodersList />
        </div>
      </div>
    </div>
  );
}
