import React, { useRef } from "react";
import coding from "../assets/coding.png";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmit = (data) => {
    if (emailRegex.test(data.email) && passwordRegex.test(data.password)) {
      alert("you will be redirected to Dashboard");
    } else {
      alert("wrong Credentials");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-[#23155b] flex justify-center items-center p-6 md:p-10">
        <img
          src={coding}
          className="w-40 sm:w-52 md:w-full max-w-xs md:max-w-md"
          alt="coding"
        />
      </div>
      <div className="flex justify-center items-center bg-[#d9d5d5] px-4 py-8">
        <div className="flex flex-col bg-white px-6 py-8 rounded-lg w-full max-w-xs md:max-w-md">
          <h3 className="text-[#8053ff] text-center text-xl font-semibold mb-6">
            Join Coders Now!
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
                {...register("email", { required: "Email is required" })}
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
                className="w-full p-3 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(47,61,255)] text-white py-3 rounded-md hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <div className="text-center text-sm mt-4">
            <p>
              New to CodeCLA.
              <NavLink to="/SignUp" className="text-blue-500 hover:underline">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
