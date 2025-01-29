import React, { useState, useEffect } from "react";
import Translation from "./Translation";

const TextInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("Select Voice");
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

  const playText = () => {
    const utterance = new SpeechSynthesisUtterance(textArea);
    const selectedVoiceObject = voices.find((voice) => voice.name === selectedVoice);
    if (selectedVoiceObject) {
      utterance.voice = selectedVoiceObject;
    }
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-lg w-1/2 p-8">
      <h1 className="text-center text-4xl text-white mb-6">TTS and Translation</h1>
      <div className="flex flex-col items-center">
        <textarea
          className="text-2xl p-3 mb-4 rounded-lg bg-gray-200 text-black w-full h-32"
          placeholder="Enter text here..."
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <Translation />
        <span className="text-white text-lg mb-2">Select Voice</span>
        <div className="relative w-full">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-blue-500 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg transition-transform duration-300 transform hover:scale-105"
          >
            {selectedVoice}
          </button>
          {isOpen && (
            <div className="absolute bg-blue-500 top-full left-0 flex flex-col items-start rounded-lg p-2 w-full shadow-md">
              {voices.map((voice, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(voice)}
                  className="hover:bg-blue-600 px-4 py-2 rounded w-full cursor-pointer transition-colors duration-150"
                >
                  {voice.name} ({voice.lang})
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={playText}
          className="bg-blue-600 w-full mt-4 p-2 text-xl text-white rounded-lg hover:scale-105 transition-transform duration-150"
        >
          Play Text
        </button>
      </div>
    </div>
  );
};

export default TextInput;
