import React from "react";
import { Editor } from "@monaco-editor/react";
import Split from "react-split";
import CodeEditor from "./CodeEditor";
import TestCaseViewer from "./TestCaseViewer";
import DropDown from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import { setFontSize, setLanguage } from "../redux/store/workSpaceSlice.js";

export default function Playground() {
  const dispatch = useDispatch();
  const { language, fontSize } = useSelector((state) => state.workspace);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="p-2 bg-gray-100 flex gap-4">
        <DropDown
          label="Language"
          options={["javascript", "python"]}
          value={language}
          onChange={(val) => dispatch(setLanguage(val))}
        />
        <DropDown
          label="Font Size"
          options={[12, 14, 16, 18, 20]}
          value={fontSize}
          onChange={(val) => dispatch(setFontSize(Number(val)))}
        />
        <Split className="flex-1 flex flex-col">
          <div className="overflow-auto bg-white">
            <TestCaseViewer />
          </div>
        </Split>
      </div>
    </div>
  );
}
