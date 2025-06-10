import React from 'react';

function Modal({ onClose }) {
  // 바깥 영역 클릭 시 닫기
  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal-background') {
      onClose();
    }
  };

  return (
    <div
      className="modal-background"
      onClick={handleBackgroundClick}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          minWidth: '300px'
        }}
      >
        <h2>모달창이에요!</h2>
        <p>이건 모달 컴포넌트로 분리된 창입니다.</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Modal;
