import React, { useState } from 'react';
import { MdOutlineSettingsVoice } from "react-icons/md";
import { images } from '../Data/imagePage';

const CatBort = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, timestamp: new Date() }]);
      setMessage('');
    }
  };

  return (
    <div className='flex flex-col bg-[#161B1C] w-full text-white px-1  h-screen'>
      <div className="flex flex-col  border-l-2 border-gray-600 p-2">
        <div className='py-4 space-y-3'>
          <div className='border-b-2 border-gray-600 p-1 flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={images[11]} alt="profile" className='w-11 rounded-full' />
              <div className='px-6'>
                <h1>Muhaame</h1>
                <h1 className='text-sm text-[#2B6BC5]'>Typing.....</h1>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={images[3]} alt='' className='rounded-full border border-gray-700 px-1' />
              <img src={images[2]} alt='' className='rounded-full border border-gray-700 px-1' />
              <img src={images[9]} alt='' className='rounded-full border border-gray-700 px-1' />
            </div>
          </div>
          <div className='flex flex-grow bg-[#0A0E0F] h-[500px] p-2 overflow-y-auto'>
            <div className='w-fit'>
              {messages.map((msg, index) => (
                <div key={index} className='text-sm text-gray-400 mb-2'>
                  <div className='bg-[#252C2E] p-2 rounded-md'>
                    {msg.text}
                  </div>
                  <div className='text-xs text-gray-500'>
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex py-5 gap-3 items-center'>
            <img src={images[16]} alt="" className='w-8 h-8' />
            <input
              type="text"
              placeholder='Message today'
              value={message}
              onChange={handleMessageChange}
              className='text-sm bg-[#252C2E] rounded-md text-clip p-3 w-full border-none outline-none'
            />
            <button onClick={handleSendMessage} className='text-3xl'>
              <img src={images[17]} alt="" className='w-8 h-8' />
            </button>
            <MdOutlineSettingsVoice size={30} className='text-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatBort;
