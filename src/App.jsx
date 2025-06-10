import React, { useState } from 'react';
import Modal from './components/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-6">Day 7: 모달창 만들기</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        모달 열기
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-semibold mb-2">이것은 모달창입니다</h2>
        <p>배경을 클릭하거나 Esc 키로도 닫을 수 있어요.</p>
      </Modal>
    </div>
  );
}
