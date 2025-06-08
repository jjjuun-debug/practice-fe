import React from 'react';
import './App.css';
import {useState} from 'react';
function App() {

  let [name,setName] = useState('');

  const onChange = (e) =>{
    setName(e.target.value);
  }
  const onReset = () =>{
    setName('');
  }

 

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'yellow',fondSize:'16px'}}>
          자기소개</h4>
      </div>

      <div>
        <span>입력 : </span>
        <input 
        placeholder='이름과 소개를 입력하세요.'
        type = "text"
        value = {name}
        onChange={onChange}
        />  
        
        
        <div>
          <button onClick={onReset}>초기화</button>
        </div>

        <div>
          
          <b>{name}</b>
        </div>
        
      </div>

      <div>

      </div>
       

    </div>
    
  );
}

export default App;
