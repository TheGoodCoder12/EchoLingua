import React, { useState, useEffect } from "react";
import Translation from "./Translation";

const TextInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("Select voice");
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    const fetchVoices = () => {
      const voicesList = speechSynthesis.getVoices();
      setVoices(voicesList);
    };

    fetchVoices();
    speechSynthesis.addEventListener("voiceschanged", fetchVoices);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", fetchVoices);
    };
  }, []);

  const handleOptionClick = (voice) => {
    setSelectedVoice(voice.name);
    setIsOpen(false);
  };

  function playText() {
    const utterance = new SpeechSynthesisUtterance(textArea);
    const selectedVoiceObject = voices.find((voice) => voice.name === selectedVoice);
    if (selectedVoiceObject) {
      utterance.voice = selectedVoiceObject;
    }
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="bg-gray-600 w-1/2 h-1/2 m-10 rounded-2xl flex flex-col justify-center items-center p-3">
      <h1 className="text-center text-6xl text-white">TTS and Translation</h1>
      <div className="flex justify-center flex-col items-left m-3 p-3">
        <textarea
          className="text-2xl p-2 m-2 rounded-lg bg-gray-200 text-black"
          placeholder="Enter text here..."
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <Translation/>
        <span className="text-white">Select voice</span>
        <div className="relative flex flex-col items-center w-full m-2 h-auto rounded-lg">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
          >
            {selectedVoice}
          </button>
          {isOpen && (
            <div className="absolute bg-blue-400 top-16 left-0 flex flex-col items-start rounded-lg p-2 w-full shadow-md">
              {voices.map((voice, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(voice)}
                  className="hover:bg-blue-500 px-4 py-2 rounded w-full cursor-pointer"
                >
                  {voice.name} ({voice.lang})
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={playText}
          className="bg-blue-500 w-4/5 m-2 p-2 text-xl text-white rounded-2xl hover:scale-[1.08] transition-all duration-150"
        >
          Play text
        </button>
      </div>
    </div>
  );
};

export default TextInput;
