import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export default function StrikesHeatMap({ submissions }) {
  const endDate = new Date();
  const startDate = new Date();

  startDate.setFullYear(endDate.getFullYear() - 1);
  return (
    <div className="w-full max-w-xs p-4">
      <h1 className="text-2xl text-center mb-3 mt-3">Your coding strikes</h1>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={submissions}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          if (value.count < 3) return "color-scale-1";
          if (value.count < 6) return "color-scale-2";
          if (value.count < 9) return "color-scale-3";
          return "color-scale-4";
        }}
        showWeekdayLabels
      />
    </div>
  );
}
