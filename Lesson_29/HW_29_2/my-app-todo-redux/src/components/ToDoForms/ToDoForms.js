import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/Actions';
import "../../Styles/Styles.css"

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        content: input,
      }));
      setInput('');
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className='todo-input'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add TODO"
      />
      <button className='todo-button' type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
