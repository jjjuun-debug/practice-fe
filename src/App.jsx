import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from "./BusinessCard.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <BusinessCard name = "김민우" job = "선생님" contact = "112" />
      <BusinessCard name = "고경민" job = "(진)군인" contact = "119" />
    </div>
  );
}

export default App
