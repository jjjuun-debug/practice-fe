import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnswerNum from "./components/day8/answerNum.jsx"

function App() {
  return (
    <div className="answernum">
      <main>
        <AnswerNum />
      </main>
    </div>
  );
}

export default App;
