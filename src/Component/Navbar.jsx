import React from "react";
import logo  from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-8 py-4">
      <div>
        <img className="w-[90px]" src={logo} alt="logo" />
      </div>
      <div className="flex gap-8">
        <a className="hover:bg-teal-500 rounded-md py-1 px-3" href="">Home</a>
        <a className="hover:bg-teal-500 rounded-md py-1 px-3" href="">Service</a>
        <a className="hover:bg-teal-500 rounded-md py-1 px-3" href="">Blog</a>
        <a className="hover:bg-teal-500 rounded-md py-1 px-3" href="">Contact</a>
        <a className="hover:bg-teal-500 rounded-md py-1 px-3" href="">About</a>
        <a className="hover:bg-teal-500 rounded-md py-1 px-3" href="">Property Listing</a>
      </div>
    </div>
  );
};

export default Navbar;
