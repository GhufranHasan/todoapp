import React, { useState } from 'react';

export default function TodoItem({ todo, onClick, onDelete }) {
    // const [todo, setTodo] = useState<string>("")

  return (
    <li
      style={{
        color: todo.completed ? 'green' : 'orange',
        fontFamily: 'calibri',
        fontStyle: 'oblique',
        listStyle: 'none',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onClick(todo)}
      />
      {todo.todoText}
      &nbsp; &nbsp; &nbsp;
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '8px',
          height: '30px',
          width: '90px',
          fontFamily: 'calibri',
        }}
        onClick={() => onDelete(todo)}
      >
        Delete Todo
      </button>
      <br />
      <br />
    </li>
  );
}
