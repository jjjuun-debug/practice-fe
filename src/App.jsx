import React, { useState } from 'react';


export default function App() {
  const [value, setSearchValue] = useState("");

  const randNum = Math.random()  * 100;
  const randFloor = Math.floor(randNum);

  const r = randFloor;
  const change = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <input
      value = {value}
      placeholder = "값을 입력해주세요."
      onChange = {change}
    />
    <button onClick={()=>{
      console.log("입력값 : ", value,"\n");
      console.log("값 ",r,"\n");
    }}>
      값 사용
    </button>
    <div>
      {
        r==value
        ? <p>정답을 맞추셨습니다.</p>
        : null
      }
    </div>
    
    </div>

   
    
  );
}
