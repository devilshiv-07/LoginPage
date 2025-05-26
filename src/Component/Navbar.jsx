import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="w-full h-[8vh] md:h-[10vh] flex items-center justify-between px-3 md:py-4 relative">

      {/* logo? */}
      <div>
        <img className="w-[60px] md:w-[70px] lg:w-[90px]" src={logo} alt="logo" />
      </div>

      {/* SideBar three line div  */}
      <div className="mr-2 md:hidden cursor-pointer" onClick={() => setSideBar(!sideBar)} >
        {sideBar ? (
          <RxCross2 size={30} />
        ) : (
          <IoReorderThreeOutline size={35} />
        )}
      </div>

      {/* Conditional rendering of sidebar */}
      {sideBar ? (
        <div className="h-[90vh] bg-[#232323] w-[60vw] sm:w-[45vw] z-30 flex flex-col gap-10 md:hidden absolute top-[8vh] right-[10px] pt-10 px-2 sm:pt-12 sm:px-6 rounded-lg">
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
      ) : (
        <></>
      )}

      {/* Icons for Navbar */}
      <div className="py-4 md:flex justiy-between lg:gap-8 hidden">
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
