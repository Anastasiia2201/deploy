import React, { useState } from 'react';
import TodoList from '../components/TodoList';

function TodoPage() {
  let data = [
    { id: 1, title: 'Buy groceries', completed: false, show: true },
    { id: 2, title: 'Read a book', completed: false,  show: true },
    ]
 const [todos, setTodos] = useState(data);
 const [newTodo, setNewTodo] = useState('');
 const toggleTodo = (id) => {
    setTodos(
    todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
 };
 const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
      show: true,
    };
    setTodos([...todos, newTodoItem]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id != id));
  };

  const showCompletedTodo = () => {
    setTodos(
      todos.map((todo) => todo.completed != true ? { ...todo, show: false} : { ...todo, show: true}
      ));
  };
 const showNotCompletedTodo = () => {
  setTodos(
    todos.map((todo) => todo.completed != true ? { ...todo, show: true} : { ...todo, show: false}
    ));
};

const showAll = () => {
  setTodos(todos.map(item => {
    item.show = true;
    return item;}))
  };

 return (
  <div class="grid gap-6">
    <h1 class="text-blue-500" >My To-Do List</h1>
    <form onSubmit={addTodo}>
      <input
      class="border-fuchsia-200 border-8"
      type="text"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Add new task..."
      />
      <button type="submit">Add</button>
    </form>
    <TodoList todos={todos} toggleTodo={toggleTodo}  showAll={showAll}
    deleteTodo={deleteTodo}  showCompletedTodo={showCompletedTodo} showNotCompletedTodo={showNotCompletedTodo}/>
  </div>
  );
}

export default TodoPage;