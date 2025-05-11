import React, { useState } from "react";
import ChallengeStats from "../components/ChallengeStats";

export default function Profile() {
  const [avatar, setAvatar] = useState(null);
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  // dummy variable, the data should be get from backend
  const challengeData = {
    easy: { solved: 10, total: 15 },
    moderate: { solved: 12, total: 20 },
    hard: { solved: 5, total: 15 },
  };
  return (
    <div className="p-6 flex flex-col items-start bg-[#CBd5E1] dark:bg-[#4322C9A3]">
      <form>
        <div className="flex justify-between">
          <div className="relative w-14 h-14 rounded-2xl">
            <img
              src="{avatar || 'https://via.placeholder.com/96'}"
              className="w-28 h-14 rounded-full object-cover border-2 border-gray-400"
            />
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
            <label
              htmlFor="avatarUpload"
              title="Edit Avatar"
              className="absolute bottom-1 right-1 text-gray-700 cursor-pointer hover:text-black"
            >
              🖊️
            </label>
          </div>

          <div className="text-center items-end">
            <span className="text-sm text-gray-600">Rank:</span>
            <span className="text-md text-gray-600 ml-1">Expert</span>
          </div>
        </div>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="w-full max-w-sm"
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          className="w-full max-w-sm"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          readOnly
          className="w-full max-w-sm"
        />
        <label htmlFor="about">tell us more about you</label>
        <input
          type="text"
          id="about"
          placeholder="about"
          className="w-full max-w-sm pb-12"
        />
      </form>
      <div className="w-full md:w-1/3">
        <ChallengeStats data={challengeData} />
      </div>
    </div>
  );
}
