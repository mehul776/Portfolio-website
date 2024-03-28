import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-28  bg-black flex items-center justify-between mx-10  rounded-lg">
      <div className="ml-5 text-5xl text-white ">
        Portfolio<span className="text-orange-400 text-7 xl">.</span>
      </div>
      <div className="flex gap-9 text-xl text-white mr-2">
        <div className="cursor-pointer  hover:text-orange-400">
          <Link to="/">HOME</Link>
        </div>
        <div className="cursor-pointer  hover:text-orange-400">
          <Link to="/about">ABOUT</Link>
        </div>
        <div className="cursor-pointer  hover:text-orange-400">
          <Link to="/projects">PROJECT</Link>
        </div>
        <div className="cursor-pointer  hover:text-orange-400">
          <Link to="/skills">SKILLS</Link>
        </div>
        <div className="cursor-pointer  hover:text-orange-400">
          <Link to="/resume">RESUME</Link>
        </div>
      </div>
      <button className="text-xl text-white mr-5 bg-orange-400 rounded-lg p-2 pl-8 pr-8 hover:bg-amber-200 hover:text-black">
        Hire me!
      </button>
    </div>
  );
};

export default Navbar;
