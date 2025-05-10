import React, { useEffect, useState } from "react";

export default function DarkMode() {
  //   const [isDark, setIsDark] = useState(() => {
  //     return localStorage.getItem("darkMode") === "enabled";
  //   });

  //   const [isDark, setIsDark] = useState(true);

  //   useEffect(() => {
  //     const root = document.documentElement;
  //     if (isDark) {
  //       root.classList.add("dark");
  //       localStorage.setItem("darkMode", "enabled");
  //     } else {
  //       root.classList.add("dark");
  //       localStorage.setItem("darkMode", "disabled");
  //     }
  //   }, [isDark]);

  //   const toggleMode = () => setIsDark((prev) => !prev);

  const [isDark, setIsDark] = useState(true);

  function toggleMode(value) {
    setIsDark(value);
    document.getElementById("root").classList.toggle("dark");
  }

  return (
    <div>
      {/* <button
        onClick={toggleMode}
        className="p-2 rounded bg-gray-300 dark:bg-gray-800 text-black dark:text-white"
      >
        {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button> */}
      {isDark ? (
        <button onClick={() => toggleMode(false)}>Dark</button>
      ) : (
        <button onClick={() => toggleMode(true)}>Light</button>
      )}
    </div>
  );
}
