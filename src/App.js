import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTaskList([
        ...taskList,
        { id: Date.now(), title: task, completed: false },
      ]);
      setTask("");
    }
  };

  const handleToggleComplete = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const displayTasks = () => {
    return (
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(task.id)}
            >
              🗑️
            </button>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span
              className="task-title"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mainPage">
      <div className="toDoListFrame">
        <h1>TO DO LIST</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <div>{displayTasks()}</div>
      </div>
    </div>
  );
}

export default App;
