import React, { useState } from "react";

const testCases = [
  { id: 1, inputText: "[1, 2, 3]", outputText: "6" },
  { id: 2, inputText: "[2, 3]", outputText: "5" },
];

export default function TestCaseViewer() {
  const [selected, setselected] = useState(testCases[0]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Test Cases</h3>
      <select
        className="mb-4 border p-2 w-full"
        onChange={(e) =>
          setselected(testCases.find((tc) => tc.id == e.target.value))
        }
      >
        {testCases.map((tc) => (
          <option key={tc.id} value={tc.id}>
            Test Case {tc.id}
          </option>
        ))}
      </select>
      <div className="mb-2">
        <strong>Input:</strong>
        <pre className="bg-gray-100 p-2 rounded">{selected.inputText}</pre>
      </div>
      <div className="mb-2">
        <strong>Expected Output</strong>
        <pre className="bg-gray-100 p-2 rounded">{selected.outputText}</pre>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </div>
  );
}
