import React, { useState } from 'react';

const imageData = [
  {
    id: 1,
    src: 'https://via.placeholder.com/150',
    title: '고양이',
    description: '귀여운 고양이입니다.',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/150/00FF00',
    title: '자연',
    description: '푸른 숲의 풍경입니다.',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/150/0000FF',
    title: '바다',
    description: '맑고 푸른 바다입니다.',
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📷 이미지 갤러리</h1>

      <div className="mb-6 border rounded-lg p-4 shadow">
        <img src={selectedImage.src} alt={selectedImage.title} className="w-80 h-80 object-cover mx-auto" />
        <h2 className="text-xl font-semibold mt-4 text-center">{selectedImage.title}</h2>
        <p className="text-gray-600 text-center">{selectedImage.description}</p>
      </div>

      <div className="flex gap-4 justify-center">
        {imageData.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.title}
            className={`w-24 h-24 object-cover cursor-pointer border-2 rounded ${
              selectedImage.id === image.id ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
}
