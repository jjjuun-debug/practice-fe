import React, { useState } from 'react';

export default function App() {
  const [모달창, 모달변경] = useState(false);

  return (
    <div>
      <button onClick={() => 모달변경(true)}>모달 열기</button>

      {모달창 && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            textAlign: 'center',
            minWidth: '300px'
            }}>
            <h4>모달창</h4>
            <p>asdasdasdasd</p>
            <button onClick={() => 모달변경(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}