import React, { useState } from 'react';

function BusinessCard({ name, jobTitle, contact }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>
        {name}
        <button
          onClick={handleLike}
          style={styles.heartButton}
        >
          {liked ? '❤️' : '🤍'} {likes}
        </button>
      </h2>
      <p style={styles.job}>{jobTitle}</p>
      <p style={styles.contact}>📞 {contact}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '2px solid #4A90E2',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    backgroundColor: '#f0f8ff',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  name: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    color: '#333',
    fontSize: '20px'
  },
  heartButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    marginLeft: '10px',
  },
  job: {
    margin: '8px 0',
    fontWeight: 'bold',
    color: '#555',
  },
  contact: {
    margin: 0,
    color: '#888',
  }
};

export default BusinessCard;
