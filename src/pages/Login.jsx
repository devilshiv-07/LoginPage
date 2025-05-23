import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center -mt-8">

      {/* form div */}
      <div className="corner-gradient-border w-96 px-10 py-18 flex flex-col items-center relative">

        {/* css divs */}
        <div className="w-75 absolute top-0 right-0 bg-black h-2"></div>
        <div className="w-75 absolute bottom-0 left-0 bg-black h-2"></div>

        {/* Login Heading */}
        <h2 className="text-5xl mb-14">Login</h2>

        {/* Form */}
        <form>

          {/* name div */}
          <div className="flex items-center mb-10">
            <label>
              <FaUser size={21} />
            </label>
            <input
              className="w-70 px-3 border-b text-lg"
              type="text"
              placeholder="Username"
            />
          </div>

          {/* password div */}
          <div className="flex items-center mb-14">
            <label>
              <FaUnlockKeyhole size={21} />
            </label>
            <input
              className="w-70 px-3 border-b text-lg"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* Login Button */}
          <button
            className="w-full border-1 border-yellow-300 py-1 text-lg tracking-wide rounded-full mb-8"
            type="submit"
          >
            LOGIN
          </button>
        </form>

        {/* FP and Register */}
        <div className="w-full text-teal-400 flex justify-between items-center">
          <a href="#">Forgot Password ?</a>
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
