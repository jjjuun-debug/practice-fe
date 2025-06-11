import React from 'react';

function Modal({ onClose }) {
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
        <h2>🪟 모달창입니다!</h2>
        <p>이건 별도로 만든 컴포넌트예요.</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Modal;
