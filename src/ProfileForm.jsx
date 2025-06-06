import React, { useState } from 'react';

function ProfileForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !bio.trim()) {
      setError('이름과 자기소개를 모두 입력해주세요.');
      return;
    }
    setError('');
    onSubmit(name.trim(), bio.trim());
    setName('');
    setBio('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ color: 'black' }}>
      <div>
        <label>이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>자기소개:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">제출</button>
    </form>
  );
}

export default ProfileForm;
