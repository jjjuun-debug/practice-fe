import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [ 좋아요, 변경] = useState(0);

  return (
    <div>
      <div>
        <h4><span onClick={()=>{ 변경(좋아요+1) }}>❤️ 좋아요</span> {좋아요}</h4>
      </div>
    </div>
  );
}

export default App;
