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
    <div className="bg-gray-700 w-full max-w-3xl rounded-2xl shadow-2xl p-8">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">TTS and Translation</h1>
      <div className="space-y-6">
        <textarea
          className="w-full p-4 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Enter text here..."
          rows="5"
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <Translation />
        <div className="relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all duration-300 flex justify-between items-center"
          >
            {selectedVoice}
            <span className="transform transition-transform duration-300">{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <div className="absolute w-full mt-2 bg-gray-600 rounded-lg shadow-lg z-10">
              {voices.map((voice, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(voice)}
                  className="p-3 hover:bg-gray-500 cursor-pointer rounded-lg"
                >
                  {voice.name} ({voice.lang})
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={playText}
          className="w-full bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all duration-300"
        >
          Play Text
        </button>
      </div>
    </div>
  );
};

export default TextInput;