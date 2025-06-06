import React, { useState } from 'react';
import IntroForm from '../components/BusinessCard';

function Home() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data); // 결과 저장
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>자기소개 입력</h1>
      <IntroForm onSubmit={handleFormSubmit} />

      {submittedData && (
        <div style={{ marginTop: '20px', border: '1px solid gray', padding: '10px' }}>
          <h2>제출된 정보</h2>
          <p><strong>이름:</strong> {submittedData.name}</p>
          <p><strong>자기소개:</strong> {submittedData.intro}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
