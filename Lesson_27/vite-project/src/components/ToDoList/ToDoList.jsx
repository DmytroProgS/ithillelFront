import { useState, useEffect } from 'react';
import '../../Styles/ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  useEffect(() => {
    const loadTasks = () => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(savedTasks);
    };

    loadTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskValue.trim() === '') return;

    const newTask = { text: taskValue.trim(), completed: false };
    setTasks([...tasks, newTask]);
    setTaskValue('');
  };

  const handleTaskChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task.text !== taskToDelete.text);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>ToDoList</h1>
      <form className="form js--form" onSubmit={handleAddTask}>
        <input 
          type="text" 
          name="value" 
          required 
          className="form__input js--form__input" 
          value={taskValue} 
          onChange={handleTaskChange}
        />
        <button className="form__btn" type="submit">Додати</button>
      </form>

      <ul className="js--todos-wrapper">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggleTask(index)}
            />
            <span className={`todo-item__description ${task.completed ? 'todo-item--checked' : ''}`}>
              {task.text}
            </span>
            <button className="todo-item__delete" onClick={() => handleDeleteTask(task)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
