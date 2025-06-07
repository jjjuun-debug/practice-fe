import { useState } from 'react';

import OutlineInput from './OutlineInput';
import PrimaryButton from './PrimaryButton';
import TextButton from './TextButton';
import ToDo from './ToDo';


function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleChange = (event) => {
    setInputValue(event.target.value);
    };

    const addToDo = () => {
        setToDoList((current) => [...current, { isComplete: false, value: inputValue }]);
        setInputValue('');
    };

    const toggleComplete = (index) => {
        setToDoList((current) => current.map((toDo, toDoIndex) => {
        if (toDoIndex === index) {
        const newToDo = Object.assign({}, toDo);
        newToDo.isComplete = !newToDo.isComplete;
        return newToDo;
    } else {
        return toDo;
    }
    }));
    };

    const isUncompletedToDo = toDo => !toDo.isComplete;

    const getUncompletedToDoList = () => toDoList.filter(isUncompletedToDo);

    const removeAllCompletedToDo = () => {
        setToDoList((current) => current.filter(isUncompletedToDo));
    };

    return (
        <div className="app">
        <h1 className="app-title">To Do List</h1>

        <div className="app-form">
            <OutlineInput
                placeholder="추가할 내용 입력"
                value={inputValue}
                onChange={handleChange}
            />

            <PrimaryButton
            label="할 일 추가"
            onClick={addToDo}
            />
        </div>

      <div className="app-list">	
        {toDoList.map((toDo, index) =>
          <ToDo
            key={index}
            isComplete={toDo.isComplete}
            value={toDo.value}
            onClick={() => toggleComplete(index)}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;