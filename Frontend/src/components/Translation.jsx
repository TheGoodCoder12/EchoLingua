import React, { useState } from "react";

const Translation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select language");
  const [userInput, setUserInput] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
  ];

  const translateText = async () => {
    const response = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userInput, targetLang: selectedLanguage }),
    });
    const data = await response.json();
    setTranslatedText(data.translatedText);
  };

  const handleOptionClick = (language) => {
    setSelectedLanguage(language.name);
    setIsOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all duration-300 flex justify-between items-center"
        >
          {selectedLanguage}
          <span className="transform transition-transform duration-300">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="absolute w-full mt-2 bg-gray-600 rounded-lg shadow-lg z-10">
            {languages.map((language, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(language)}
                className="p-3 hover:bg-gray-500 cursor-pointer rounded-lg"
              >
                {language.code} ({language.name})
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={translateText}
        className="w-full bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all duration-300"
      >
        Translate
      </button>
      {translatedText && (
        <div className="p-4 bg-gray-600 rounded-lg text-white">
          <strong>Translated Text:</strong> {translatedText}
        </div>
      )}
    </div>
  );
};

export default Translation;