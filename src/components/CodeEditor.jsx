import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { useSelector } from "react-redux";

export default function CodeEditor() {
  const { language, fontSize } = useSelector((state) => state.workspace);

  const getLanguageExtension = () => {
    return language === "python" ? python() : javascript();
  };
  return (
    <div>
      <CodeMirror
        value="// Write your code here"
        height="100%"
        extensions={[getLanguageExtension()]}
        theme={oneDark}
        style={{ fontSize }}
      />
    </div>
  );
}
