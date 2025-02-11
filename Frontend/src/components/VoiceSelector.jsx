import React, { useState, useEffect } from "react";

const VoiceSelector = () => {
    const [voice, setVoice] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/users");
                let data = await response.json();
                setVoice(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const radius = 100; // Radius of the circular area

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-400 rounded-md">
            <span className="text-black text-4xl font-medium mb-4">Voice Selector</span>
            <div className="w-32 h-32 rounded-full bg-gray-200 relative flex items-center justify-center">
                {voice.map((item, index) => {
                    const angle = (index / voice.length) * (2 * Math.PI); // Calculate angle in radians
                    const x = Math.cos(angle) * radius; // X position
                    const y = Math.sin(angle) * radius; // Y position

                    return (
                        <div
                            key={item.id}
                            className="absolute text-black"
                            style={{
                                left: `50%`,
                                top: `50%`,
                                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                            }}
                        >
                            <h1>{item.name}</h1>
                        </div>
                    );
                })}
                <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-1/2 left-1/2" />
            </div>
        </div>
    );
};

export default VoiceSelector;
