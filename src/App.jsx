import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Introducing(a){
  return(
    <div className = "box">
     <h3>{a.name}</h3>
      <p>{a.content}</p>
    </div>
  )
}

function App(){
  let [입력, 입력변경] = useState(['','','',''])
  let [출력, 출력변경] = useState(['','','',''])

  const input = (p,q) =>{
    const copy = [...입력];
    copy[p] = q
    입력변경(copy)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        onChange={(e) => input(0, e.target.value)}
      />
            <input
        type="text"
        placeholder="나이를 입력하세요"
        onChange={(e) => input(1, e.target.value)}
      />
            <input
        type="text"
        placeholder="직업을 입력하세요"
        onChange={(e) => input(2, e.target.value)}
      />
            <input
        type="text"
        placeholder="취미를 입력하세요"
        onChange={(e) => input(3, e.target.value)}
      />
      
      <div style={{ textAlign: 'center' }}>
        <button onClick={()=>{ 출력변경([...입력])
         }}>제출</button>
      </div>

      <Introducing
        name='이름'
        content={출력[0]}      
      />
      <Introducing
        name='나이'
        content={출력[1]}      
      />
      <Introducing
        name='직업'
        content={출력[2]}      
      />
      <Introducing
        name='취미'
        content={출력[3]}      
      />
    </div>
  );
}

export default App;