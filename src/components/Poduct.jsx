import React from "react";
import Cards from "./Cards";

function Poduct() {
  return (
    <div className="bg-sky-200 grid  h-screen mt-10 mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
    <Cards/>
    <Cards/><Cards/><Cards/><Cards/><Cards/>
    </div>
  );
}

export default Poduct;
