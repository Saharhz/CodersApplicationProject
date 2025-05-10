import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import ReactSwitch from "react-switch";

export default function Navbar() {
  return (
    <nav className="p-2 text-sm flex flex-nowrap gap-3 bg-[#E5E7EB] dark:bg-[#23155B]">
      <img src={logo} alt="logo" className="size-6" />
      <h3>CodeCLA</h3>
      <NavLink to="/Challenges">Challenges</NavLink>
      <NavLink to="/Leaderboard">Leaderboard</NavLink>
    </nav>
  );
}
