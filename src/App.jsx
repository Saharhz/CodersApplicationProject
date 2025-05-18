"use client";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Leaderboard from "./pages/Leaderboard";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Workspace from "./pages/Workspace";
import Challenges from "./pages/Challenges";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-[#4322C9A3]" : "bg-[#CBd5E1]"
        }`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Workspace" element={<Workspace />} />
          <Route path="/Challenges" element={<Challenges />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
