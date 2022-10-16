import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { AiOutlineSearch,AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

const navbar = () => {
  return (
    <nav className="flex  items-center justify-between navbar ">
      <img src={logo} alt="logo" className="h-[3rem]" />
      <div className="bg-white rounded-full flex items-center px-2 w-{400px} sm:w-[500px] lg:w-[400] ">
        <AiOutlineSearch size={36} />
        <input
          className="bg-transparent p-1 w-full focus:outline-none placeholder:italic"
          type="text"
          placeholder="Search the Product here..........."
        />
      </div>
      <div className="flex flex-row space-x-1.5">
        <Link
          to="/"
          className="bg-violet-400 text-white px-4  py-2 sm:flex rounded-full inline-block hover:bg-violet-600"
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
        <Link to="/" className=" bg-black text-white px-4  py-2 sm:flex rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Signin
        </Link>
        <div  className=" text-white">
          <h1 className=" w-full text-3xl font-bold"></h1>
        
        </div>
      </div>
    </nav>
  );
};

export default navbar;
