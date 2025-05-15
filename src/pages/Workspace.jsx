import React from "react";
import Split from "react-split";
import ChallengeDescription from "../components/ChallengeDescription";
import Playground from "../components/Playground";

export default function WorkSpaceSlice() {
  return (
    <div>
      <Split
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
        <div>
          <ChallengeDescription />
        </div>
        <div>
          <Playground />
        </div>
      </Split>
    </div>
  );
}
