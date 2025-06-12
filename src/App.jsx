import React, { useState } from 'react';


export default function App() {

  let [도시, 도시변경] = useState(['서울','대구','부산']);
  let [온도, 온도변경] = useState(['0','10','20','30']);
  let [날씨, 날씨변경] = useState(['맑음☀️','비☔','건조🏜️']);
  let day = 1;
  return (
    <div>
      <h3>날씨카드</h3>

      <h4>도시:{도시[day]}</h4>
      <h4>온도:{온도[day]}도</h4>
      <h4>날씨:{날씨[day]}</h4>
    </div>
   
    
  );
}
