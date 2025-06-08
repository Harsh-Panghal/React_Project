import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onToggleComplete, onEdit, onUpdate }) {
  const [editValue, setEditValue] = useState(todo.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(todo.id, editValue);
  };

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="save-btn">Save</button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
          <div>
            <button onClick={() => onEdit(todo.id)} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
