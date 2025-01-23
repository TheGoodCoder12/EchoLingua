import Navbar from "./components/Navbar"
import TextInput from "./components/TextInput"
import VoiceSelector from "./components/VoiceSelector"

function App() {
  return (
    <div className='bg-gray-800 text-white h-screen font-jersey'>
      <Navbar/>
      <div className="flex justify-evenly items-center">
      <TextInput/>
      <VoiceSelector/>
      </div>

    </div>
  )
}

export default App
