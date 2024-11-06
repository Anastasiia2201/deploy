import React from 'react';

import TodoItem from './TodoItem';
function TodoList({todos, toggleTodo, deleteTodo, showAll, showCompletedTodo, showNotCompletedTodo}) {
 return (
    
 <div class="flex items-center flex-col border-8">
<button  onClick={() => showCompletedTodo()}>show completed</button>
<button onClick={() => showNotCompletedTodo()}>show not completed</button>
<button class="text-white font-bold bg-purple-700 hover:bg-purple-
800 py-2 px-4 rounded" onClick={() => showAll()}>show all</button>
 {todos.map((todo) => (
 <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
 ))}
 </div>
 );
}
export default TodoList;