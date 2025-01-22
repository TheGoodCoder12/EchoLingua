import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black w-full h-12'>
      <ul className='flex justify-between p-4'>
        <div className='transition-all hover:scale-125 cursor-pointer hover:underline duration-500'>logo here</div>
        <li className='transition-all hover:scale-125 cursor-pointer hover:underline duration-500'>Home</li>
        <li className='transition-all hover:scale-125 cursor-pointer hover:underline duration-500'>About</li>
        <li className='transition-all hover:scale-125 cursor-pointer hover:underline duration-500'>Contact</li>
        <div className='transition-all hover:scale-125 cursor-pointer hover:underline duration-500'>Profile img here</div>
      </ul>
    </div>
  )
}

export default Navbar
