import React from 'react';
import {useState} from "react";
import { BrowserRouter, Routes, Route, Link ,useNavigate} from "react-router-dom";
import App from "./App"
import { logo } from "./assets";
const Login =() => { 
    const navigate = useNavigate();
 
    const handleClick=  () => {
       
        navigate("/Home");
    }
    return (
    <div className ="relative h-96 w-full bg-green-300 grid grid-cols-2  justify-center min-h-screen overflow-hidden">
    <div className='relative left-52'>
        <img src={logo} alt="logo" className=' absolute top-60 left-56 w-72'/>
        <h1 className='absolute top-[25rem] left-60 text-4xl from-neutral-600 font-bold '>Happy <span className='text-white'>RENT</span>ing :)</h1>
    </div>
    <div className="w-full p-6 h-[25rem] m-auto bg-white rounded-md shadow-2xl lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
           Sign in
        </h1>
        <form className="mt-6">
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            
            <div className="mt-6">
                {/* <Link to="/app"> */}
                    <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleClick} >
                        Login
                    </button>
                {/* </Link> */}
            </div>
        </form>

    </div>
</div>

)

}
export default Login;