import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { images } from '../Data/imagePage';
import { MdOutlineMenu } from "react-icons/md";
const ContactPage = () => {
    const [showPage, setShowPage] = useState(true);

    const handleMenuClick = () => {
        setShowPage(false);
    };
    return (
        <div className='flex flex-col  bg-[#161B1C] w-1/2 text-white'>
            {showPage && (
                <div className='flex flex-col   border-l-2 border-gray-600 '>
                    <div className='border-b-2 border-gray-600 p-1 flex flex-col py-4  items-center '>
                        <div className='space-x-3 flex items-center'>
                            <h1>Contact details</h1>
                            <img src={images[9]} alt="settings" className='rounded-full border p-1 border-gray-700' onClick={handleMenuClick} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-1 ">
                        <img src={images[14]} alt="" className='rounded-full w-20' />
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
                        <div className='flex gap-20 w-28'>
                            <img src={images[21]} alt="" />
                            <img src={images[22]} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between p-3 px-10 '>
                        <div className='flex gap-20 w-28'>
                            <img src={images[21]} alt="" className='w-28 h-auto' />
                            <div className='bg-gray-600 p-10 h-auto px-10 space-x-3 rounded-sm'>
                                <img src={images[7]} alt="" />
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
                    <div className='flex justify-between px-10'>
                        <div className='bg-gray-600 p-3 rounded-lg'>
                            <div className='flex bg-gray-900  px-10 space-x-3 rounded-mg'>
                                <img src={images[24]} alt="" />
                                <h1 className='text-sm'>Lorem ipusm lamalam...</h1>
                            </div>
                            <div className='text-sm flex justify-between text-gray-400'>
                                <h1>Doce</h1>
                                <h1>32KB</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between px-10 mt-6'>
                        <div className='bg-gray-600 p-3 rounded-lg'>
                            <div className='flex bg-gray-900  px-10 space-x-3 rounded-mg'>
                                <img src={images[24]} alt="" />
                                <h1 className='text-sm'>Lorem ipusm lamalam...</h1>
                            </div>
                            <div className='text-sm flex justify-between text-gray-400'>
                                <h1>Doce</h1>
                                <h1>32KB</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

        </div>
    );
}

export default ContactPage;
