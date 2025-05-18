import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/store/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:scale-105 transition-transform"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-blue-700" />
      )}
    </button>
  );
}
