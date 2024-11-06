import React from 'react';
import '../index.css'

function TodoItem({ todo, toggleTodo,  deleteTodo}) {
if (todo.show == true)
 return (
 <div class="flex justify-between items-center border-2 w-full">
 <input
 type="checkbox"
 checked={todo.completed}
 onChange={() => toggleTodo(todo.id)}
 />
 <span>{todo.title}</span>
 <button class=" bg-red-950 text-white font-bold m-5" onClick={() => deleteTodo(todo.id)}>delete</button>
 </div>
 );
 else 
 return
}
export default TodoItem;