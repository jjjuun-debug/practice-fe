import React, { useState } from 'react';
import Modal from './components/BusinessCard';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '40px' }}>
      <h1>🌟 모달 예제</h1>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
