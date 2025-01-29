import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import VoiceSelector from "./components/VoiceSelector";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white h-screen font-jersey flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <TextInput />
      </div>
    </div>
  );
}

export default App;
