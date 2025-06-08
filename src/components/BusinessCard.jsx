import React, { useState } from 'react';

function TabUI() {
  const [activeTab, setActiveTab] = useState(1); // 기본 탭 1 선택

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧭 간단한 탭 UI</h2>

      {/* 버튼 3개 */}
      <div>
        <button onClick={() => setActiveTab(1)}>Tab 1</button>
        <button onClick={() => setActiveTab(2)}>Tab 2</button>
        <button onClick={() => setActiveTab(3)}>Tab 3</button>
      </div>

      <hr />

      {/* 조건에 따라 다른 내용 보여주기 */}
      {activeTab === 1 && <p>📄 탭 1의 내용입니다</p>}
      {activeTab === 2 && <p>📄 탭 2의 내용입니다</p>}
      {activeTab === 3 && <p>📄 탭 3의 내용입니다</p>}
    </div>
  );
}

export default TabUI;
