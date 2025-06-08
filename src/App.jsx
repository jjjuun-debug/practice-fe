import React, { useState } from 'react';
import './App.css';

function App() {
  const [글귀, set글귀] = useState(['안녕하세요', '행복하세요', '걱정마세요','']);
  const [num, setNum] = useState(3);

  return (
    <>
      <div className="App">
        <h4>오늘의 글귀를 뽑아보세요.</h4>
      </div>
      <div className="list">
        <div>
          <h4>{글귀[num]}</h4>
        </div>
        <div>
          <span onClick={() => setNum(0)} style={{ cursor: 'pointer', marginRight: '10px' }}>❤️</span>
          <span onClick={() => setNum(1)} style={{ cursor: 'pointer', marginRight: '10px' }}>🤍</span>
          <span onClick={() => setNum(2)} style={{ cursor: 'pointer' }}>💙</span>
        </div>
      </div>
    </>
  );
}

export default App;
