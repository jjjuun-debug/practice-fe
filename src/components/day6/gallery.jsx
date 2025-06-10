import React, { useState } from 'react';
import hyeonseoImage from './img/hyeonseo.png';
import juyounImage from './img/juyoun.png';

function Gallery() {
  const [images] = useState([
    { id: 1, src: hyeonseoImage, alt: '현서 이미지' },
    { id: 2, src: juyounImage, alt: '주연 이미지' },
  ]);
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) { //클릭된 이미지의 아이디와 useState를 활용해 selectedId의 값에 id를 저장
    setSelectedId(id);
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map(image => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={{
            width: selectedId === image.id ? '166.4px' : '83.2px', //비교(삼항 연산자)를 통해 sId의 값이 이미지 id와 같으면 크기 조정
            height: selectedId === image.id ? '243.2px' : '121.6px',
            border: '1px solid #ccc',
            cursor: 'pointer'
          }}
          onClick={() => handleClick(image.id)} //1. 클릭하면 이미지 id가 핸들 클릭 함수로 넘어감
        />
      ))}
    </div>
  );
}

export default Gallery;