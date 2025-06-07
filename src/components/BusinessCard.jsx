// src/components/TodoList.jsx
import React, { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 TODO 리스트</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: '10px' }}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
