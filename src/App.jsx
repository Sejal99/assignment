import React, { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import ResetButton from './components/ResetButton';
import TodoList from './components/TodoList';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
   
    if(todos.length>0){
    localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
    localStorage.clear()
  };

  return (
    <div className="container mx-auto p-4">
      <ResetButton resetTodos={resetTodos} />
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
