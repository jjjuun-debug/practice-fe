import React, { useState } from 'react';

function IntroForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    onSubmit({ name, intro }); // 부모 컴포넌트로 전달
    setName('');
    setIntro('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <label>이름: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>자기소개: </label>
        <textarea
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        />
      </div>
      <button type="submit">제출</button>
    </form>
  );
}

export default IntroForm;
