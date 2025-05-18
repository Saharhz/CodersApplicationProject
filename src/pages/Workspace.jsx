import React from "react";
import Split from "react-split";
import ChallengeDescription from "../components/ChallengeDescription";
import Playground from "../components/Playground";

export default function WorkSpaceSlice() {
  return (
    <div className="h-screen w-screen">
      <Split
        className="flex h-full"
        sizes={[50, 50]}
        minSize={200}
        gutterSize={10}
        gutterAlign="center"
        direction="horizontal"
        cursor="col-resize"
        gutter={() => {
          const gutter = document.createElement("div");
          gutter.className =
            "gutter bg-gray-300 hover:bg-gray-400 transition-colors w-2";
          return gutter;
        }}
      >
        <div className="p-4 overflow-auto">
          <ChallengeDescription />
        </div>
        <div className="p-4 overflow-auto">
          <Playground />
        </div>
      </Split>
    </div>
  );
}
