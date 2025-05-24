import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-8 py-4">
      <div>
        <img className="w-[90px]" src={logo} alt="logo" />
      </div>
      <div className="flex gap-8">
        <Link
          to={"/"}
          className="hover:bg-teal-500 rounded-md py-1 px-3"
          href=""
        >
          Home
        </Link>
        <Link
          to={"/"}
          className="hover:bg-teal-500 rounded-md py-1 px-3"
          href=""
        >
          Services
        </Link>
        <Link
          to={"/"}
          className="hover:bg-teal-500 rounded-md py-1 px-3"
          href=""
        >
          Blog
        </Link>
        <Link
          to={"/"}
          className="hover:bg-teal-500 rounded-md py-1 px-3"
          href=""
        >
          Contact
        </Link>
        <Link
          to={"/"}
          className="hover:bg-teal-500 rounded-md py-1 px-3"
          href=""
        >
          About
        </Link>
        <Link
          to={"/"}
          className="hover:bg-teal-500 rounded-md py-1 px-3"
          href=""
        >
          Property Listing
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
