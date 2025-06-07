import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from "./components/day3/UserProfile.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Self-Introduction Page</h1>
      </header>
      <main>
        <UserProfile />
      </main>
    </div>
  );
}

export default App;
