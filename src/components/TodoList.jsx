import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Active Todos</h2>
      <div>
        {activeTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Completed Todos</h2>
      <div>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
