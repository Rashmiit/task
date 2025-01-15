import React, { useState } from 'react';

const initialTasks = {
  todo: [
    { id: 1, content: 'Task 1' },
    { id: 2, content: 'Task 2' },
  ],
  inProgress: [
    { id: 3, content: 'Task 3' },
  ],
  done: [
    { id: 4, content: 'Task 4' },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDrop = (column, event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('text/plain');
    const task = findTaskById(taskId);

    if (task) {
      moveTask(task, column);
    }
  };

  const handleDragStart = (event, taskId) => {
    event.dataTransfer.setData('text/plain', taskId);
  };

  const findTaskById = (taskId) => {
    for (const column in tasks) {
      const task = tasks[column].find(task => task.id === parseInt(taskId));
      if (task) return task;
    }
    return null;
  };

  const moveTask = (task, targetColumn) => {
    const sourceColumn = Object.keys(tasks).find(column => tasks[column].includes(task));
    if (sourceColumn !== targetColumn) {
      setTasks(prevTasks => {
        const updatedSource = prevTasks[sourceColumn].filter(t => t.id !== task.id);
        const updatedTarget = [...prevTasks[targetColumn], task];

        return {
          ...prevTasks,
          [sourceColumn]: updatedSource,
          [targetColumn]: updatedTarget,
        };
      });
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(tasks).map(column => (
        <div
          key={column}
          className="kanban-column"
          onDrop={(e) => handleDrop(column, e)}
          onDragOver={(e) => e.preventDefault()}
        >
          <h2>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>
          <ul>
            {tasks[column].map(task => (
              <li
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                className="kanban-task"
              >
                {task.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
