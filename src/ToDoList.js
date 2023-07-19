import React from 'react';

const ToDoList = ({ items, onItemCheck, onItemDelete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onItemCheck(index)}
          />
          <span>{item.text}</span>
          <button className="delete" onClick={() => onItemDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
