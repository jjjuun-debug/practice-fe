import React, { useState } from 'react';

function generateRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState(generateRandom());
  const [tries, setTries] = useState(0);
  const maxTries = 10;

  const handleGuess = () => {
    const guess = Number(input);
    if (guess === answer) {
      setMessage('🎉 정답입니다!');
    } else if (guess < answer) {
      setMessage('📉 더 높아요!');
    } else {
      setMessage('📈 더 낮아요!');
    }
    setTries(tries + 1);
  };

  const handleReset = () => {
    setAnswer(generateRandom());
    setInput('');
    setMessage('');
    setTries(0);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>🎯 숫자 맞추기 게임</h1>
      <p>1~100 사이의 숫자를 맞춰보세요!</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={tries >= maxTries || message === '🎉 정답입니다!'}
      />
      <button
        onClick={handleGuess}
        disabled={tries >= maxTries || message === '🎉 정답입니다!'}
      >
        제출
      </button>
      <p>{message}</p>
      <p>시도 횟수: {tries} / {maxTries}</p>
      {(tries >= maxTries || message === '🎉 정답입니다!') && (
        <button onClick={handleReset}>다시 시작</button>
      )}
    </div>
  );
}

export default App;
