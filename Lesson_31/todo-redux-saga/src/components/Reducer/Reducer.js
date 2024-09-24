
import { SET_TODOS, ERROR_TODOS } from '../Actions/Actions';

const initialState = {
  todos: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        error: null,
      };
    case ERROR_TODOS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
