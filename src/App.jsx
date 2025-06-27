import React, { useState } from 'react';

export default function Input() {
  const [인풋, 인풋변경] = useState('');
  const [할일, 할일변경] = useState([]);

  const send = () => {
    const copy = { id: Date.now(), text: 인풋 };
    할일변경([...할일, copy]);
    인풋변경('');
  };

      const 삭제 = (id) => {
      할일변경(할일.filter((item) => item.id !== id));
    };

  return (
    <div>
      <h2>TODO LIST</h2>
      <div>
        <input
          type="text"
          placeholder="할 일 입력"
          value={인풋}
          onChange={(e) => 인풋변경(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />

        <button onClick={send}>추가</button>

      </div>
        <div>
          {할일.map((a) => (
          <div key={a.id}>
            <span>‧ {a.text} </span>
            <button onClick={()=>삭제(a.id)}>삭제</button>
          </div>
          ))}
        </div>
    </div>
  );
}