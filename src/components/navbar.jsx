import React from 'react'
import {close,logo,menu} from '../assets';
import {navLinks} from '../constants';

const navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-centre navbar">
      <img src={logo} alt="ship" className="w-[174px] h-[50px] pr-0" />
    </nav>
  )
}

export default navbar;