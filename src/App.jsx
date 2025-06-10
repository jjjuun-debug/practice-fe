import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from "./components/day6/gallery.jsx"

function App() {
  return (
    <div className="gallery">
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
