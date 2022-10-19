import React from "react";
import { useState } from "react";
import Product from "./Poduct";
import Lessor from "./Lessor";
import Lessee from "./Lessee";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Typed from "react-typed";

const hero = () => {
  

  return (
    <div>
      {/* <Typed strings={["still buying product","time to change","start renting the product"]} typeSpeed={50} backspeed={50} /> */}

      <div className="flex flex-row mt-3 px-5  justify-between max-w-[500px] m-auto">
        <NavLink
          to="/Home/product"
         
          className="border-none round text-xl font-bold hover:bg-sky-200 "
        >
          
          PRODUCTS
        </NavLink>
        <NavLink
          to="/Home/lessor"
          className="border-none hover:bg-lime-200 text-xl font-bold"
        >
          LESSOR
        </NavLink>
        <NavLink
         to="/Home/lessee"
          className="border-none hover:bg-rose-200 text-xl font-bold"
        >
          LESSEE
        </NavLink>
      </div>
      <div>
       <Outlet/>
      </div>
    </div>
  );
};

export default hero;
