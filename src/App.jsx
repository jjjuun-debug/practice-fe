import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./components/day4/TodoList.jsx"

function App() {
  return (
    <div className="TodoList">
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
