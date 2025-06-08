import React, { useState } from 'react';
import './App.css';

function App() {
  let [name, setName] = useState('');
  let [todo, setTodo] = useState([]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const Add = () => {
    if (name.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: name,
    };

    setTodo([...todo, newTodo]);
    setName('');
  };

  const deleteTodo = (id) => {
    const newTodos = todo.filter(item => item.id !== id);
    setTodo(newTodos);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'yellow', fontSize: '16px' }}>
          TODOLIST
        </h4>
      </div>

      <div>
        <span>입력 : </span>
        <input
          placeholder="할 일을 입력하세요."
          type="text"
          value={name}
          onChange={onChange}
        />

        <div>
          <button onClick={Add}>추가</button>
        </div>

      </div>

      <div>
        <h5>할 일 목록</h5>
        <ul>
          {todo.map(item => (
            <li key={item.id}>
              {item.text}
              <button
                style={{ marginLeft: '10px', color: 'red' }}
                onClick={() => deleteTodo(item.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
