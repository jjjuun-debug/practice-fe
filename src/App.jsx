import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

function App() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = (name, bio) => {
    setResult({ name, bio });
  };

  return (
    <div className="App" style={{ padding: '20px', color: 'black' }}>
      <h1>간단한 자기소개</h1>
      <ProfileForm onSubmit={handleFormSubmit} />

      {result && (
        <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '15px', color: 'black' }}>
          <h2>제출 결과</h2>
          <p><strong>이름:</strong> {result.name}</p>
          <p><strong>자기소개:</strong> {result.bio}</p>
        </div>
      )}
    </div>
  );
}

export default App;
