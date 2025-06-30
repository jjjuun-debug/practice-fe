import React, { useState } from 'react';

export default function App() {
  const images = [
    {
      id: 1,
      src: 'https://previews.123rf.com/images/martialred/martialred1507/martialred150700888/42620709-landscape-photo-image-flat-icon-for-apps-and-websites.jpg',
    },
    {
      id: 2,
      src: 'https://previews.123rf.com/images/martialred/martialred1507/martialred150700661/42613290-landscape-photo-image-flat-icon-for-apps-and-websites.jpg',
    },
    {
      id: 3,
      src: 'https://previews.123rf.com/images/tkacchuk/tkacchuk1412/tkacchuk141200886/34580948-photo-archive-icon-on-white-background-vector-illustration.jpg',
    },
  ];

  const [확대, 확대변경] = useState();

  return (
    <div>
      <div>
        {images.map((i) => (
          <img
            key={i.id}
            src={i.src}
            style={{
              width: '100px',
              height: '100px',
              cursor: 'pointer',
              border: '1px solid #ccc'
            }}
            onClick={() => 확대변경(i)}
          />
        ))}
      </div>

      {확대 && (
        <div>
          <img
            src={확대.src}
            style={{ width: '400px', height: 'auto', border: '2px solid black' }}
          />
        </div>
      )}
    </div>
  );
}