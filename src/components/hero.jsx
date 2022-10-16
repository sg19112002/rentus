import React from "react";
import Typed from "react-typed";

const hero = () => {
  return (
    <div>
      {/* <Typed strings={["still buying product","time to change","start renting the product"]} typeSpeed={50} backspeed={50} /> */}
      <div className="flex flex-row mt-3 px-5  justify-between max-w-[500px] m-auto">
        <button className="border-none hover:bg-sky-200 "><h4>PRODUCTS</h4></button>
        <button className="border-none hover:bg-lime-200"><h4>LESSOR</h4> </button>     
        <button className="border-none hover:bg-rose-200 first-letter:"><h4>LESSEE</h4></button>


      </div>
      
      
      
    </div>
  );
};

export default hero;
