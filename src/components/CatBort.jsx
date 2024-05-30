import React from 'react';
import { MdOutlineSettingsVoice } from "react-icons/md";
import { images } from '../Data/imagePage';
const CatBort = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#161B1C] w-fit text-white px-1 py-auto h-screen'>
       <div className="flex   border-l-2 border-gray-600 p-2">
        <div className='py-4 space-x-3'>
          <div className='border-b-2 border-gray-600 p-1 flex items-center'>
            <img src={images[11]} alt="profile" className='w-11 rounded-full' />
            <div className=' px-6'>
              <h1>Muhaame</h1>
              <h1 className='text-sm text-[#2B6BC5]'>Typing.....</h1>
            </div>
            <div className='flex gap-2 ml-96 items-center'>
              <img src={images[3]} alt='' className=' rounded-full border border-gray-700 px-1' />
              <img src={images[2]} alt='' className=' rounded-full border border-gray-700 px-1' />
              <img src={images[9]} alt='' className=' rounded-full border border-gray-700 px-1 ' />
            </div>
          </div>
          <div className='flex  bg-[#0A0E0F] h-[570px]'>
            <div className=''>
              <h1 className='text-sm text-gray-400'>My Account</h1>
            </div>
          </div>
          <div className='flex py-5 gap-3 items-center'>
            <img src={images[16]} alt="" />
            <input type="text" placeholder='Message to day' className='text-sm  bg-[#252C2E] rounded-md text-clip p-3 w-full border-none outline-none' />
            <button className='text-3xl'>
              <img src={images[17]} alt="" />
            </button>
            <MdOutlineSettingsVoice size={30} className='' />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default CatBort;
