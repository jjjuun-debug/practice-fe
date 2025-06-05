import React from 'react';
import BusinessCard from '../BusinessCard';

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>나만의 명함</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BusinessCard
          name="홍길동"
          job="프론트엔드 개발자"
          contact="hong@example.com"
        />
        <BusinessCard
          name="김영희"
          job="백엔드 개발자"
          contact="kim@example.com"
        />
      </div>
    </div>
  );
}

export default Home;