
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const validationSchema = Yup.object({
    task: Yup.string().required("Завдання не може бути порожнім"),
  });

  const addTodo = (values, { resetForm }) => {
    setTodos([...todos, values.task]);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={addTodo}
      >
        {() => (
          <Form>
            <Field name="task" placeholder="Додати нове завдання" />
            <button type="submit">Додати</button>
            <ErrorMessage name="task" component="div" />
          </Form>
        )}
      </Formik>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
