import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add a new TODO"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded w-full"
      />
    </form>
  );
}

export default TodoInput;
