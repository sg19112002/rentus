import React from "react";
import { useState } from "react";
import Product from "./Poduct";
import Lessor from "./Lessor";
import Lessee from "./Lessee";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Typed from "react-typed";

const hero = () => {
  const [layout, setLayout] = useState("");
  function handleClick(e) {
    const name = e.target.name;

    setLayout(name);
  }

  return (
    <div>
      {/* <Typed strings={["still buying product","time to change","start renting the product"]} typeSpeed={50} backspeed={50} /> */}

      <div className="flex flex-row mt-3 px-5  justify-between max-w-[500px] m-auto">
        <button
          name="product"
          onClick={handleClick}
          className="border-none text-xl font-bold hover:bg-sky-200 "
        >
          {" "}
          PRODUCTS
        </button>
        <button
          name="lessor"
          onClick={handleClick}
          className="border-none hover:bg-lime-200 text-xl font-bold"
        >
          LESSOR{" "}
        </button>
        <button
          name="lessee"
          onClick={handleClick}
          className="border-none hover:bg-rose-200 text-xl font-bold"
        >
          LESSEE
        </button>
      </div>
      <div>
        {layout == "product" ? (
          <Product />
        ) : layout == "lessor" ? (
          <Lessor />
        ) : (
          <Lessee />
        )}
      </div>
    </div>
  );
};

export default hero;
