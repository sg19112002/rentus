import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="w-full flex py-1 space-x-3 items-center justify-between navbar ">
      <img src={logo} alt="logo" className="w-[140px] h-[50px] " />
      <div className="flex flex-row p-5">
        <Link to="/" className="bg-black text-white hidden px-2 sm:flex  ">
          CART
        </Link>
        <Link to="/" className="bg-black text-white hidden px-2 sm:flex  ">
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
