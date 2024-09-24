import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, loadTodos, deleteTodo, toggleTodo } from '../src/components/Actions/Actions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    const text = prompt("Enter todo text");

    if (text) {
      dispatch(addTodo({ text }));
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
