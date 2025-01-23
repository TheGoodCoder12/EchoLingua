import React from 'react'

const TextInput = () => {
  return (
    <div className='bg-gray-600 w-1/3 h-1/2 m-10 rounded-2xl flex flex-col justify-center items-center'>
      <h1 className='text-center text-6xl'>TTS and Translation</h1>
      <div className='flex justify-center flex-col'>
        <textarea className='text-2xl p-2 m-2 rounded-lg bg-gray-200 text-black'  placeholder='Enter text here...'></textarea>
        <button className='text-lg p-2 m-2 bg-stone-700 w-1/2 self-center rounded-xl hover:scale-110 transition-all duration-500'>Speak!</button>
      </div>
      <input type="range" className='w-4/5 h-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 cursor-pointer accent-blue-500' name="" id="" />
    </div>
  )
}

export default TextInput
