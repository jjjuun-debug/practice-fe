import React from 'react';

function BusinessCard({ name, job, contact }) {
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
    </div>
  );
}

export default BusinessCard;
