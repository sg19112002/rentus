import React from "react";
import Cards from "./Cards";
import cards from "../constants/index"


function Poduct() {
  return (
    <div className="bg-sky-200  px-6 py-2 gap-3 grid  h-screen mt-10 mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
    {cards.map(function(val,index){
   return(<Cards data={val}/>);
    })}
    
    

    </div>
  );
}

export default Poduct;
