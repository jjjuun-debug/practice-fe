import React, { useState } from 'react';

function UserProfile() {
  const [profile, setProfile] = useState({ name: '', bio: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>프로필 입력</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="name" style={{ marginRight: '10px' }}>이름:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="이름"
          style={{ padding: '8px', width: 'calc(100% - 70px)' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="bio" style={{ marginRight: '10px', display: 'block', marginBottom: '5px' }}>자기소개:</label>
        <textarea
          id="bio"
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          placeholder="자기소개"
          rows="4"
          style={{ padding: '8px', width: 'calc(100% - 20px)', resize: 'vertical' }}
        />
      </div>

      {(profile.name || profile.bio) && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '15px' }}>
          <h3>입력 내용:</h3>
          {profile.name && (
            <p><strong>이름:</strong> {profile.name}</p>
          )}
          {profile.bio && (
            <div>
              <strong>자기소개:</strong>
              <div style={{ whiteSpace: 'pre-wrap', marginTop: '5px' }}>{profile.bio}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;