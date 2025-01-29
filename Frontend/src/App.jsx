import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-jersey">
      <Navbar />
      <div className="flex justify-center items-center p-8">
        <TextInput />
      </div>
    </div>
  );
}

export default App;