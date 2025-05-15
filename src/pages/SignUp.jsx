import React, { useRef } from "react";
import coding from "../assets/coding.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmit = (data) => {
    const { name, lastName, email, password } = data;

    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
      alert("Please enter a valid email and strong password.");
      return;
    }

    alert("Registration successful! Redirecting to Sign In...");
    navigate("/signin");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-[#23155b] flex justify-center items-center p-4">
        <img
          src={coding}
          className="w-48 md:w-full max-w-xs md:max-w-md"
          alt="coding"
        />
      </div>
      <div className="flex justify-center items-center bg-[#d9d5d5] p-4">
        <div className="flex flex-col bg-white px-4 py-6 rounded-lg w-full max-w-xs md:max-w-md">
          <h3 className="text-[#8053ff] text-center text-lg font-semibold mb-4">
            Join Coders Now!
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[rgb(47,61,255)] text-white py-2 rounded-md hover:opacity-90 transition mb-3 w-full"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm">
            <p>
              Already have an account?{" "}
              <NavLink to="/SignIn" className="text-blue-500 hover:underline">
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
