import React, { useState } from 'react';

function App() {
  const [탭, 탭변경] = useState(1);

  return (
    <div>
      <h2>탭</h2>
      <button onClick={() => 탭변경(1)}>1</button>
      <button onClick={() => 탭변경(2)}>2</button>
      <button onClick={() => 탭변경(3)}>3</button>

      {탭 === 1 && (
        <div style={{ backgroundColor: 'red', height: '200px', marginTop: '10px' }}>{탭}</div>
      )}

      {탭 === 2 && (
        <div style={{ backgroundColor: 'blue', height: '200px', marginTop: '10px' }}>{탭}</div>
      )}

      {탭 === 3 && (
        <div style={{ backgroundColor: 'green', height: '200px', marginTop: '10px' }}>{탭}</div>
      )}
    </div>
  );
}

export default App;