import React, { useState } from 'react';

const imageList = [
  {
    id: 1,
    url: 'https://via.placeholder.com/100',
    title: '산의 풍경',
    description: '아름다운 산의 전경입니다.'
  },
  {
    id: 2,
    url: 'https://via.placeholder.com/100?text=Lake',
    title: '호수',
    description: '잔잔한 호수의 아침 풍경.'
  },
  {
    id: 3,
    url: 'https://via.placeholder.com/100?text=City',
    title: '도시 전경',
    description: '밤의 도시 불빛이 아름다워요.'
  }
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🖼️ 이미지 갤러리</h2>

      {/* 이미지 썸네일 리스트 */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {imageList.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            style={{ cursor: 'pointer', border: '2px solid gray' }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      <hr />

      {/* 선택된 이미지 크게 보기 */}
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            style={{ width: '300px' }}
          />
          <h3>{selectedImage.title}</h3>
          <p>{selectedImage.description}</p>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
