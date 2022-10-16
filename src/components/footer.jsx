import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10 px-3 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl ml-6 font-bold text-[#00df9a]">rentus</h1>
        <div className="flex justify-center ml-[-90] space-x-6 md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex ml-[8rem] sm:justify-between mt-6 w-full pr-10 ">
        <ul className="flex sm:space-x-8 space-x-4 text-black">
          <li className="py-2 text-sm ">About us</li>
          <li className="py-2 text-sm">Terms and Conditions</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Support</li>
          <li className="py-2 text-sm">Copyright policy</li>

        </ul>
      </div>
    </div>
  );
};

export default Footer;
