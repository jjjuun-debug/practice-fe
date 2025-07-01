import React, { useState,useRef } from 'react';

export default function App() {

  const random = useRef(Math.floor(Math.random() * 100) + 1);

  const [입력, 입력변경] = useState('');
  const [비교, 비교변경] = useState(false);
  const [메시지, 메시지변경] = useState('');
  
  const 결과 = () => {
    const 숫자 = parseInt(입력);

    비교변경(true);

    if (숫자 === random.current) { 메시지변경('맞췄습니다!'); } 
    else {
      메시지변경('틀렸습니다. 다시 시도하세요.');
      setTimeout(() => {비교변경(false);}, 1000);
    }
  }

  return (
    <div>
      <h2> 숫자 맞추기 게임 </h2>
      <p>{random.current}</p>
      <input
        type="text"
        placeholder="숫자를 입력하세요."
        value={입력}
        onChange={(e) => 입력변경(e.target.value)}
         onKeyDown={(e) => e.key === 'Enter' && 결과()}
      />
      <button onClick={ 결과 }>제출</button>
      {비교 && (
        <div>
          <p>{메시지}</p>
        </div>
      )}
    </div>
  );
}