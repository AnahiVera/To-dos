import React, { useState } from "react";

export const TodoForm = () => {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([])

  return (
    <div>
      <h1 className="text-center mt-5">Your To Do List!</h1>
      <ul>
        <li>
          <input
            type="text"
            className="todo-input"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key === "Enter" && e.target.value !== "") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What do yo need to do?"></input>
        </li >
        {todos.map((item, index) => (
          <li >
            {item}{""} <i class="trash fa-trash" onClick={() =>
              setTodos(
                todos.filter(
                  (t, currentIndex) => index != currentIndex )
            )
            }></i>
          </li>
        ))
        }
      </ul>
      <small> Pending {todos.length} tasks</small>
    </div>
  )
}


