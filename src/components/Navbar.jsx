import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { images } from '../Data/imagePage'; // Adjust the import path as needed
import { form } from '../Data/form'



const Navbar = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [click, setClick] = useState([])

  return (
    <div className='flex md:flex-row bg-[#161B1C] w-full h-screen p-5 text-white'>
      <div className='flex flex-col items-center'>
        <div className='mb-10'>
          <img src={images[0]} alt='logo' className='w-10 h-10 bg-white rounded-full p-2' />
        </div>
        <div className='mb-10 py-10 space-y-3'>
          <img src={images[1]} alt='Chats' className='w-10 h-10' />
          <img src={images[3]} alt='Call' className='w-6 h-10' />
          <img src={images[2]} alt='Contact' className='w-6 h-10' />
          <img src={images[4]} alt='Settings' className='w-6 h-10' />
          <img src={images[5]} alt='Loop' className='w-6 h-10' />
        </div>
        <div className='mt-28 space-y-4'>
          <img src={images[7]} alt='Icons' className='w-10 h-10 bg-slate-500 rounded-full p-2' />
          <img src={images[6]} alt='Profile' className='w-10 h-10 rounded-full' />
        </div>
      </div>

      <div className='flex flex-col ml-20 border-l-2 border-gray-600 w-fit h-auto'>
        <div className='border-b-2 border-gray-600 p-1 flex flex-col items-center'>
          <div className='space-x-3 flex items-center'>
            <img src={images[8]} alt="profile" className='w-11 h-11 rounded-full' />
            <h1>Muhammed Hafeex</h1>
            <img src={images[9]} alt="settings" className='rounded-full border p-1 border-gray-700' />
          </div>
          <h1 className='text-sm text-gray-400 text-start'>My Account</h1>
        </div>
        <div className='p-1'>
          <input
            type="text"
            placeholder='Enter Search'
            className='w-full h-8 rounded-sm bg-[#2c3537] border-none outline-none text-sm'
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between items-center p-1">
          <h1>Online</h1>
          <div className='flex items-center'>
            <h1 className='text-sm text-gray-400'>More</h1>
            <IoIosArrowForward size={10} />
          </div>
        </div>
        <ul className="flex gap-4 p-1">
          {[images[10], images[11], images[12], images[13], images[14]].map((src, index) => (
            <li key={index}>
              <img src={src} alt="profile" className='w-11 h-11 rounded-full' />
              <p className='text-sm text-gray-600'>More</p>
            </li>
          ))}
        </ul>
        <div className='flex p-1 items-center gap-2'>
          <h1>Messages</h1>
          <p className='text-sm bg-[#2B6BC5] p-0 rounded-full w-10 text-center'>20</p>
        </div>
        <ul className='p-1 space-y-10'>
          {form.map((item) => (
            <li className='flex justify-between items-center' key={item.id}>
              <div className='flex items-center gap-2'>
                <img src={item.image} alt="profile" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                  <h1>{item.name}</h1>
                  <h1 className='text-sm text-gray-600'>{item.message}</h1>
                </div>
              </div>
              <div className='flex text-sm items-center'>
                <img src={images[15]} alt="options" className='w-7' />
                <h1 className='text-sm text-gray-600'>12.45</h1>
              </div>
            </li>
          ))}
        </ul>
        <div className='p-1'>
          <h1>Current Search: {inputValue}</h1>
        </div>
      </div>

      <div className="flex flex-col justify-between border-l-2 border-gray-600 p-1 space-x-4 w-auto h-auto">
        <div className='py-0'>
          <div className='border-b-2 border-gray-600 p-1 flex items-center'>
            <img src={images[11]} alt="profile" className='w-11 h-11 rounded-full' />
            <div className='flex-1 px-2'>
              <h1>Muhaame</h1>
              <h1 className='text-sm text-[#2B6BC5]'>Typing.....</h1>
            </div>
            <div className='flex gap-2 ml-96 w-10 h-14 items-center'>
              <img src={images[3]} alt='' className='w-6 h-6 rounded-full border border-gray-700 p-0' />
              <img src={images[2]} alt='' className='w-6 h-6 rounded-full border border-gray-700 p-0' />
              <img src={images[9]} alt='' className='w-6 h-6 rounded-full border border-gray-700 p-0 ' />
            </div>
          </div>
          <div className='flex flex-col px-2 bg-[#0A0E0F] w-full h-[550px]'>
            <div className=''>
              <h1 className='text-sm text-gray-400'>My Account</h1>
            </div>
          </div>
          <div className='w-auto flex p-1 gap-3 items-center py-5'>
            <img src={images[16]} alt="" />
            <input type="text" placeholder='Message to day' className='text-sm w-full bg-[#252C2E] h-10 rounded-md text-clip p-1 border-none outline-none' />
            <button onSubmit={inputValue}>
              <img src={images[17]} alt="" className='w-4 px-0 ' />
            </button>
            <MdOutlineSettingsVoice size={20} className='' />
          </div>
        </div>
      </div>


      <div className='flex flex-col ml-20 border-l-2 border-gray-600 '>
        <div className='border-b-2 border-gray-600 p-1 flex flex-col  items-center '>
          <div className='space-x-3 flex items-center'>
            <h1>Contact detaails</h1>
            <img src={images[9]} alt="settings" className='rounded-full border p-1 border-gray-700' />
          </div>
        </div>
        <div className="flex justify-center items-center p-1">
          <img src={images[14]} alt="" className='w-20 h-20 rounded-full' />
        </div>
        <div className='flex justify-center'>
          <h1>Afeez</h1>
        </div>
        <div className="flex justify-between items-center p-3 px-10">
          <h1>Media</h1>
          <div className='flex items-center'>
            <h1 className='text-sm text-[#2B6BC5]'>View</h1>
            <IoIosArrowForward size={10} className='text-[#2B6BC5]' />
          </div>
        </div>
        <div className='flex justify-between p-3 px-10'>
          <div className='flex gap-20'>
            <img src={images[21]} alt="" className='w-28 h-auto' />
            <img src={images[22]} alt="" className='w-28 h-auto' />
          </div>
        </div>
        <div className='flex justify-between p-3 px-10'>
          <div className='flex gap-20'>
            <img src={images[21]} alt="" className='w-28 h-auto' />
            <div className='bg-gray-600 p-10 h-auto px-10 space-x-3 rounded-sm'>
              <img src={images[7]} alt="" className='w-11 h-auto' />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-3  px-10">
          <h1>Fies</h1>
          <div className='flex items-center'>
            <h1 className='text-sm text-[#2B6BC5]'>View</h1>
            <IoIosArrowForward size={10} className='text-[#2B6BC5]' />
          </div>
        </div>
        <div className='flex justify-between p-3 px-10'>
          <div className='bg-gray-600 p-3 rounded-lg'>
            <div className='flex bg-gray-900 p-1 h-auto px-10 space-x-3 rounded-mg'>
              <img src={images[24]} alt="" className='w-5 h-auto' />
              <h1 className='text-sm'>Lorem ipusm lamalam...</h1>
            </div>
            <div className='text-sm flex justify-between text-gray-400'>
              <h1>Doce</h1>
              <h1>32KB</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-between p-3 px-10'>
          <div className='bg-gray-600 p-3 rounded-lg'>
            <div className='flex bg-gray-900 p-1 h-auto px-10 space-x-3 rounded-mg'>
              <img src={images[24]} alt="" className='w-5 h-auto' />
              <h1 className='text-sm'>Lorem ipusm lamalam...</h1>
            </div>
            <div className='text-sm flex justify-between text-gray-400'>
              <h1>Doce</h1>
              <h1>32KB</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
