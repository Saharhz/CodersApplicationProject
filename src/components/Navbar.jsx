import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import ReactSwitch from "react-switch";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  return (
    <nav className="p-2 text-sm flex flex-nowrap gap-3 text-[#E5E7EB] bg-[#E5E7EB] dark:bg-[#23155B] ">
      <div>
        <img src={logo} alt="logo" className="size-6" />
        <h3>CodeCLA</h3>
        <NavLink to="/Challenges">Challenges</NavLink>
        <NavLink to="/Leaderboard">Leaderboard</NavLink>
      </div>

      <div className="flex items-center gap-6">
        <button className=" text-[#E5E7EB] dark:bg-[#23155B]">🌓</button>
      </div>
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="flex items-center cursor-pointer gap-2"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-800 dark:text-white">John Doe</span>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#23155B] border border-gray-200 dark:border-gray-600 rounded shadow-lg">
              <ul className="text-sm text-gray-800 dark:text-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                  Profile
                </li>
                {/* <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                  Settings
                </li> */}
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
