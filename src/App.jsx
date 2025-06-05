import React from 'react';
import BusinessCard from "./BusinessCard";


function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>명함 리스트</h1>
      <BusinessCard
        name="박주영"
        jobTitle="프론트엔드 개발자"
        contact="010-6868-3956"
      />
      <BusinessCard
        name="짱구"
        jobTitle="부리부리"
        contact="010-9292-9292"
      />
      <BusinessCard
        name="김민우"
        jobTitle="로즈다방 에이스 미스킴"
        contact="010-5877-3385"
      />
    </div>
  );
}

export default App;
