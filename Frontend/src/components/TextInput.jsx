import React, { useState } from 'react';

const TextInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('Select voice');
  const [TextArea, setTextArea] = useState("")

  const handleOptionClick = (voice) => {
    setSelectedVoice(voice);
    setIsOpen(false);
  };
  function playText() {
    const [utterance, setUtterance] = useState("")
    setUtterance(TextArea)
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="bg-gray-600 w-1/3 h-1/2 m-10 rounded-2xl flex flex-col justify-center items-center">
      <h1 className="text-center text-6xl text-white">TTS and Translation</h1>
      <div className="flex justify-center flex-col items-center">
        <textarea
          className="text-2xl p-2 m-2 rounded-lg bg-gray-200 text-black"
          placeholder="Enter text here..."
          onChange={()=>{
            setTextArea(e.target.value)
          }}
        ></textarea>
        <span className="text-white">Select voice</span>
        <div className="relative flex flex-col items-center w-[340px] h-auto rounded-lg">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
          >
            {selectedVoice}
          </button>
          {isOpen && (
            <div className="absolute bg-blue-400 top-16 left-0 flex flex-col items-start rounded-lg p-2 w-full shadow-md">
              <div
                onClick={() => handleOptionClick('Voice 1')}
                className="hover:bg-blue-500 px-4 py-2 rounded w-full cursor-pointer"
              >
                Voice 1
              </div>
              <div
                onClick={() => handleOptionClick('Voice 2')}
                className="hover:bg-blue-500 px-4 py-2 rounded w-full cursor-pointer"
              >
                Voice 2
              </div>
              <div
                onClick={() => handleOptionClick('Voice 3')}
                className="hover:bg-blue-500 px-4 py-2 rounded w-full cursor-pointer"
              >
                Voice 3
              </div>
            </div>
          )}
        </div>
        <button onClick={playText()} className="bg-blue-500 w-4/5 m-2 p-2 text-xl text-white rounded-2xl hover:scale-[1.08] transition-all duration-150">
          Play text
        </button>
      </div>
    </div>
  );
};

export default TextInput;
