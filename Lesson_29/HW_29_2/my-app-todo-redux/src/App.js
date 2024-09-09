import React from 'react';
import TodoForm from './components/ToDoForms/ToDoForms';
import TodoList from './components/ToDoList/ToDoList';
import Footer from './components/Footer/Footer';
import "./Styles/Styles.css"

const App = () => {
  return (
    <div className='todo'>
      <h1>TODO</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
