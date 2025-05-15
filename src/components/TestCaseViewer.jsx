import React, { useState } from "react";

const testCases = [
  { id: 1, inputText: "[1, 2, 3]", outputText: "6" },
  { id: 2, inputText: "[2, 3]", outputText: "5" },
];

export default function TestCaseViewer() {
  const [selected, setselected] = useState(testCases[0]);

  return (
    <div>
      <h3>Test Cases</h3>
      <select
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
      <div>
        <strong>Expected Output</strong>
        <pre>{selected.outputText}</pre>
      </div>
      <button>Submit</button>
    </div>
  );
}
