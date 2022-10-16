import React from 'react'
import airbnb from "../assets/airbnb.png";

function Cards() {
  return (
    
    <div className='border-x-8 rounded-2xl hover:scale-y-110 ease-in-out border-sky-200 flex gap-x-3 b my-3  w-full h-80 mt-3 col-span-1 bg-amber-50'>
    <div><img src={airbnb} className="border-4 mx-2 my-2 h-32 border-y-stone-900" alt="product"/></div>
    <h2></h2>
    
    
    
    </div>
  )
}

export default Cards