import React from 'react';
import './App.css';
function App() {

  let name = '박주영';
  let job = '개발자꿈나무';
  let call = '010-6868-3956';
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red',fondSize:'16px'}}>
          명함</h4>
      </div>
      <div className="mainsytle-nav">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <h5>📞{call}</h5>
      </div>
      
    </div>
    
  );
}

export default App;
