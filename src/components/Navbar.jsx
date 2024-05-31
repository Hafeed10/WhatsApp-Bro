import React from 'react'
import { Link, Element } from 'react-scroll'
import { images } from '../Data/imagePage';

function Navbar() {
  return (
    <div className='flex flex-col bg-[#161B1C] w-fit text-white space-y-28 px-6 h-screen justify-evenly'>

      <div className=''>
        <img src={images[0]} alt='logo' className='bg-white rounded-full p-2' />
      </div>
      <div className='flex flex-col space-y-4 w-10 items-center'>
        <Link to='contact-section' smooth={true} duration={500}>
          <img src={images[1]} alt='Chats' />
        </Link>
        <Link to='output' smooth={true} duration={500}>
          <img src={images[3]} alt='Call' />
        </Link>
        <Link to='output' smooth={true} duration={500}>
          <img src={images[2]} alt='Contact' />
        </Link>
        <Link to='settings-section' smooth={true} duration={500}>
          <img src={images[4]} alt='Settings' />
        </Link>
        <Link to='loop-section' smooth={true} duration={500}>
          <img src={images[5]} alt='Loop' />
        </Link>
      </div>
      <div className='space-y-4'>
        <img src={images[7]} alt='Icons' className='bg-slate-500 rounded-full p-2' />
        <img src={images[6]} alt='Profile' className='rounded-full w-10' />
      </div>
    </div>
  )
}

export default Navbar