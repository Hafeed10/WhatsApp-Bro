import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { images } from '../Data/imagePage';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#161B1C] w-fit p-5 text-white space-x-5 px-6 py-14'>
      <div>
        <div className='mb-10'>
          <img src={images[0]} alt='logo' className='bg-white rounded-full p-2' />
        </div>
        <div className='mb-10 py-20 space-y-10 w-10'>
          <Link to='/CatBort'>
            <img src={images[1]} alt='Chats' />
          </Link>
          <Link to='/Call'>
            <img src={images[3]} alt='Call' />
          </Link>
          <Link to='/Contact'>
            <img src={images[2]} alt='Contact' />
          </Link>
          <Link to='/Settings'>
            <img src={images[4]} alt='Settings' />
          </Link>
          <Link to='/Loop'>
            <img src={images[5]} alt='Loop' />
          </Link>
        </div>
        <div className='mt-28 space-y-4 w-10'>
          <img src={images[7]} alt='Icons' className='bg-slate-500 rounded-full p-2' />
          <img src={images[6]} alt='Profile' className='rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
