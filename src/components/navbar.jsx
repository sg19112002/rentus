import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const navbar = () => {
  return (
    <nav className="w-full flex py-1 space-x-3 items-center justify-between navbar ">
      <img src={logo} alt="logo" className="w-[140px] h-[50px] " />
      <div className="bg-white rounded-full flex items-center px-2 w-{400px} sm:w-[500px] lg:w-[400] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-1 w-full focus:outline-none placeholder:italic"
          type="text"
          placeholder="Search the Product here..........."
        />
      </div>
      <div className="flex flex-row p">
        <Link
          to="/"
          className="bg-violet-400 text-white px-2 sm:flex  rounded-full inline-block hover:bg-green-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          cart(0)
        </Link>
        <Link to="/" className=" hidden px-4 sm:flex ">
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
