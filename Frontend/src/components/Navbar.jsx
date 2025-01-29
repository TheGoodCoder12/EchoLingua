import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 w-full py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-all duration-300 cursor-pointer">
          TTS & Translate
        </div>
        <ul className="flex space-x-6">
          <li className="text-lg text-gray-300 hover:text-white transition-all duration-300 cursor-pointer">Home</li>
          <li className="text-lg text-gray-300 hover:text-white transition-all duration-300 cursor-pointer">About</li>
          <li className="text-lg text-gray-300 hover:text-white transition-all duration-300 cursor-pointer">Contact</li>
        </ul>
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 cursor-pointer">
          <span>👤</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;