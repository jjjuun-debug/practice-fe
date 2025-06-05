// BusinessCard.jsx
import React from 'react';

function BusinessCard({ name, jobTitle, contact }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
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
    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
  },
  name: {
    margin: 0,
    color: '#333',
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
