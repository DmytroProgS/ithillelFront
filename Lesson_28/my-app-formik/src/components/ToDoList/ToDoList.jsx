import React, { useState } from "react";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import "../../styles/ToDoList.css";
import "../../App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const validationSchema = Yup.object({
    task: Yup.string().required('Завдання не може бути порожнім').min(5, 'Завдання має складатися не менше ніж з 5 символів'),
  });

  const addTodo = (values, { resetForm }) => {
    setTodos([...todos, { text: values.task, completed: false }]);
    resetForm();
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  const handleToggleTask = (indexToToggle) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === indexToToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>ToDoList</h1>
      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={addTodo}
      >
        {({ errors, touched }) => (
          <Form className="form js--form">
            <div className="form__group">
              <Field
                name="task"
                placeholder="Додати нове завдання"
                className="form__input js--form__input"
              />
              <button className="form__btn" type="submit">
                Додати
              </button>
            </div>
            {errors.task && touched.task && (
              <div className="form__error">{errors.task}</div>
            )}
          </Form>
        )}
      </Formik>

      <ul className="js--todos-wrapper">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTask(index)}
            />
            <span className={`todo-item__description ${todo.completed ? 'todo-item--checked' : ''}`}>
              {todo.text}
            </span>
            <button className="todo-item__delete" onClick={() => handleDeleteTask(index)}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
