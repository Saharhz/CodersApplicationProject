import React, { useRef } from "react";
import coding from "../assets/coding.png";
import { useNavigate, NavLink } from "react-router-dom";

export default function SignIn() {
  let emailRef = useRef();
  let passRef = useRef();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let navigate = useNavigate();

  function Login() {
    let email = emailRef.current.value;
    let password = passRef.current.value;
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      alert("you will be redirected to Dashboard");
      return;
    } else alert("wrong Credentials");
  }

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
          <input
            type="email"
            placeholder="Email"
            id="email"
            ref={emailRef}
            className="mb-3 p-2 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            ref={passRef}
            className="mb-3 p-2 rounded-full text-sm text-[#d9d5d5] placeholder:bg-[#23155b] placeholder:p-2"
          />
          <button
            onClick={Login}
            className="bg-[rgb(47,61,255)] text-white py-2 rounded-md hover:opacity-90 transition mb-3"
          >
            Login
          </button>
          <div className="text-center text-sm">
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
