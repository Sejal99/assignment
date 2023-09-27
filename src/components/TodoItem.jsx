import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  const { id, text, completed } = todo;

  return (
    <div
      className={`p-2 mb-2 border rounded cursor-pointer ${
        completed ? 'bg-gray-200' : ''
      }`}
      onClick={() => toggleTodo(id)}
    >
      {text}
    </div>
  );
}

export default TodoItem;
