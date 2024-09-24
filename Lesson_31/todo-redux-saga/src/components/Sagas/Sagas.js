// sagas.js
import { put, call, takeEvery } from 'redux-saga/effects';
import { ADD_TODO, LOAD_TODOS, DELETE_TODO, TOGGLE_TODO, setTodos, errorTodos } from '../Actions/Actions';

const fetchTodosApi = () => Promise.resolve([{ id: 1, text: 'Sample Todo', completed: false }]);
const addTodoApi = (todo) => Promise.resolve({ ...todo, id: Date.now() });
const deleteTodoApi = (id) => Promise.resolve(id);
const toggleTodoApi = (id) => Promise.resolve(id);

// Сага для завантаження списку todos
function* loadTodosSaga() {
  try {
    const todos = yield call(fetchTodosApi);
    yield put(setTodos(todos));
  } catch (error) {
    yield put(errorTodos('Failed to load todos'));
  }
}

// Сага для додавання нового завдання
function* addTodoSaga(action) {
  try {
    const newTodo = yield call(addTodoApi, action.payload);
    yield put({ type: LOAD_TODOS }); // Перезавантажуємо список після додавання
  } catch (error) {
    yield put(errorTodos('Failed to add todo'));
  }
}

// Додаємо саґи для інших дій, як наприклад видалення та переключення стану завдання
export default function* todoSaga() {
  yield takeEvery(LOAD_TODOS, loadTodosSaga);
  yield takeEvery(ADD_TODO, addTodoSaga);
}
