import React from 'react'
import Start from './pages/Start'
import Finished from "./pages/Finished";

function App() {
  return (
    <div className="bg-gray-100 h-screen pt-8">
      <Start handleStart={() => null} />
      <Finished name={null} handleRestart={() => null} />
    </div>
  )
}

export default App
