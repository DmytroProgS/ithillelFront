import React from 'react';
import { useSelector } from 'react-redux';
import "../../Styles/Styles.css"

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      {todos.length === 0 ? (
        <p>No TODOs yet. Add one above!</p>
      ) : (
        <ul className='todo-box'>
          {todos.map(todo => (
            <li className='todo-list' key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default TodoList;
