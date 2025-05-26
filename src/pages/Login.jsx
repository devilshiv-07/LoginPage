import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleUser = (e) => {
    console.log(e);
    setUser(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="w-full h-[92vh] md:h-[90vh] flex items-center justify-center -mt-16 sm:-mt-6 lg:-mt-8">
      {/* form div */}
      <div className="login_form_container w-76 md:w-86 lg:w-90 flex items-center justify-center relative overflow-hidden z-10">
        <div className="login_form w-full m-1.5 px-8 md:px-10 py-16 flex flex-col items-center bg-black z-20">

          {/* Login Heading */}
          <h2 className="text-5xl mb-14">Login</h2>

          {/* Form */}
          <form method="post" className="w-full">
            {/* name div */}
            <div className="flex items-center mb-10">
              <label>
                <FaUser size={21} />
              </label>
              <input
                name="username"
                value={user}
                onChange={handleUser}
                className="w-full px-3 border-b text-lg"
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
                name="password"
                value={pass}
                onChange={handlePass}
                className="w-full px-3 border-b text-lg"
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
    </div>
  );
};

export default Login;
