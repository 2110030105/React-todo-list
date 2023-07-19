import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
      </header>
      <div className="TaskForm">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="delete" onClick={() => handleDeleteTask(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
