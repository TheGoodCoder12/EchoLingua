import React, { useState } from 'react';

const Translation = () => {
  const [userInput, setUserInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [isOpen, setIsOpen] = useState(false);
  const [translatedText, setTranslatedText] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
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
    <div className="mt-4 w-full">
      <span className="text-white">Select Language</span>
      <div className="relative flex flex-col items-center w-full mb-2">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-blue-500 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg transition-transform duration-300 transform hover:scale-105"
        >
          {selectedLanguage}
        </button>
        {isOpen && (
          <div className="absolute bg-blue-500 top-full left-0 flex flex-col items-start rounded-lg p-2 w-full shadow-md">
            {languages.map((language) => (
              <div
                key={language.code}
                onClick={() => handleOptionClick(language)}
                className="hover:bg-blue-600 px-4 py-2 rounded w-full cursor-pointer transition-colors duration-150"
              >
                {language.code} ({language.name})
              </div>
            ))}
          </div>
        )}
        <button
          onClick={translateText}
          className='bg-blue-600 w-full mt-4 p-2 text-xl text-white rounded-lg hover:scale-105 transition-transform duration-150'
        >
          Translate
        </button>
        {translatedText && (
          <div className="mt-4 p-2 bg-gray-700 rounded-lg text-white">
            <h2 className="font-bold">Translated Text:</h2>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Translation;
