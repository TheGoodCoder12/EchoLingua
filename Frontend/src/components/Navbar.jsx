import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-black w-full h-16 shadow-lg'>
      <ul className='flex justify-between items-center p-4'>
        <div className='text-2xl font-bold transition-transform transform hover:scale-125 cursor-pointer'>Logo Here</div>
        <li className='transition-transform transform hover:scale-125 cursor-pointer hover:underline duration-300'>Home</li>
        <li className='transition-transform transform hover:scale-125 cursor-pointer hover:underline duration-300'>About</li>
        <li className='transition-transform transform hover:scale-125 cursor-pointer hover:underline duration-300'>Contact</li>
        <div className='transition-transform transform hover:scale-125 cursor-pointer'>Profile Img Here</div>
      </ul>
    </div>
  );
};

export default Navbar;
