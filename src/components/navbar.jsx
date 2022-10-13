import React from 'react'
import {close,logo,menu} from '../assets';
import {navLinks} from '../constants';

const navbar = () => {
  return (
    <nav className="w-full flex py-1 justify-between items-centre navbar">
      <img src={logo} alt="ship" className="w-[140px] h-[50px] " />
    </nav>
  )
}

export default navbar;