import React from "react";
import data from "../constants/index";
import rating from "../assets/rating.png"
function Lessor() {
  return (
    <div className="bg-lime-200  h-screen  py-7 px-8 mt-10 mx-4 ">
      <div className=" mx-auto col-span w-full">
      <h1 className="font-extrabold text-4xl mt-4 ml-4"> Your Rented Items !</h1>
      </div>
      <div className="grid gap-x-0 grid-cols-4 h-[39rem]">
      <div className="bg-zinc-50 mx-6 px-3 my-12 h-56  ">

        <img src={data[0].img} className="pt-6 mx-auto"/>
        <h1 className="mx-auto px-2 mt-2">{data[0].pd_name}</h1>
      </div >
    
      <div className="bg-zinc-50 mx-6 px-3 flex my-12 h-56 col-span-3 text-xl">
        <div><h2 className="text-slate-500 mt-8  mb-2 ml-20 border-b-slate-400"><span className="font-extrabold">Alloted Price :</span> {`₹ ${data[0].Price}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">Posted Date :</span> {` ${data[0].start_date}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">End Date :</span> {` ${data[0].end_date}`}</h2>
        <h2 className="text-slate-500 text-xl my-2 ml-20"><span className="font-extralight">Rented To mukesh97@gamil.com</span> </h2>
        </div>
        <div>
          <h1 className="relative font-bold text-slate-500 top-16 left-80">Ratings</h1>
          <img className="h-8 relative left-72 top-20"  src={rating}/>
        </div>
        
      </div>
      <div className="bg-zinc-50 mx-6 px-3 py-6 my-12 h-56  ">

        <img src={data[5].img} className="pt-2 h-40 mx-auto"/>
        <h1 className="mx-auto text-center mt-2 px-2 ">{data[5].pd_name}</h1>
      </div >
    
      <div className="bg-zinc-50 mx-6 px-3 flex my-12 h-56 col-span-3 text-xl">
        <div><h2 className="text-slate-500 mt-8  mb-2 ml-20 border-b-slate-400"><span className="font-extrabold">Alloted Price :</span> {`₹ ${data[5].Price}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">Posted Date :</span> {` ${data[5].start_date}`}</h2>
        <h2 className="text-slate-500 my-2 ml-20"><span className="font-extrabold">End Date :</span> {` ${data[5].end_date}`}</h2>
        <h2 className="text-slate-500 text-xl my-2 ml-20"><span className="font-extralight">Rented To aravind12302@gamil.com</span> </h2>
        </div>
        <div>
        <h1 className="relative font-bold text-7xl text-slate-500 top-12 left-72">19</h1>
        <h3 className="relative font-bold text-slate-500 top-16 left-[16.5rem]">Days To Return</h3>
        </div>
        
      </div>
      </div>


    </div>
  );
}

export default Lessor;
