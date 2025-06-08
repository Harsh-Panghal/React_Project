import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggleComplete, onEdit, onUpdate }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;
