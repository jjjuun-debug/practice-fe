import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from "./components/day1/BusinessCard.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        ♥️ {count}
      </button>
    </div>
    </>
  );
}

export default App;
