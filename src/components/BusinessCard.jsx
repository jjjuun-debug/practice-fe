import React, { useState } from 'react';

function BusinessCard({ name, job, contact }) {
  const [likes, setLikes] = useState(0);           // 숫자 상태
  const [liked, setLiked] = useState(false);       // ❤️ / 🤍 상태

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      width: '240px'
    }}>
      <h2>{name}</h2>
      <p>직업: {job}</p>
      <p>연락처: {contact}</p>

      {/* ❤️ 좋아요 버튼 */}
      <button onClick={toggleLike} style={{ fontSize: '20px', cursor: 'pointer' }}>
        {liked ? '❤️' : '🤍'} 좋아요 {likes}
      </button>
    </div>
  );
}

export default BusinessCard;
