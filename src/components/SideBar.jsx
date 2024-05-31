import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { images } from '../Data/imagePage';
import { form } from '../Data/form'

const SideBar = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#161B1C] text-white px-1 py-auto h-screen'>
      <div className='flex flex-col border-l-2 border-gray-600'>
        <div className='border-b-2 border-gray-600 p-1 flex flex-col items-center'>
          <div className='space-x-3 flex items-center '>
            <img src={images[8]} alt="profile" className='w-11 rounded-full' />
            <h1>Muhammed Hafeex</h1>
            <img src={images[9]} alt="settings" className='rounded-full border p-1 border-gray-700' />
          </div>
          <h1 className='text-sm text-gray-400 text-start'>My Account</h1>
        </div>
        <div className='p-1'>
          <input
            type="text"
            placeholder='Enter Search'
            className='rounded-sm bg-[#2c3537] border-none outline-none text-sm p-2 w-full'
          />
        </div>
        <div className="flex justify-between items-center p-1">
          <h1>Online</h1>
          <div className='flex items-center'>
            <h1 className='text-sm text-gray-400'>More</h1>
            <IoIosArrowForward size={10} />
          </div>
        </div>
        <ul className="flex gap-4 p-1 ">
          {[images[10], images[11], images[12], images[13], images[14]].map((src, index) => (
            <li key={index}>
              <img src={src} alt="profile" className='w-11 rounded-full' />
              <p className='text-sm text-gray-600'>More</p>
            </li>
          ))}
        </ul>
        <div className='flex p-1 items-center gap-2'>
          <h1>Messages</h1>
          <p className='text-sm bg-[#2B6BC5] p-0 rounded-full w-10 text-center'>20</p>
        </div>
        <ul className='p-1 space-y-10 cursor-pointer'>
          {form.map((item) => (
            <li className='flex justify-between items-center hover:bg-gray-700 hover:p-1 transition-all end-auto hover:rounded-lg' key={item.id}>
              <div className='flex items-center gap-2'>
                <img src={item.image} alt="profile" className='w-11 rounded-full' />
                <div className='flex flex-col'>
                  <h1>{item.name}</h1>
                  <h1 className='text-sm text-gray-600'>{item.message}</h1>
                </div>
              </div>
              <div className='flex text-sm items-center'>
                <img src={images[15]} alt="options" />
                <h1 className='text-sm text-gray-600'>12.45</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
