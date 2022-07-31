import { CREATE_TODO, FETCH_TODO } from "./types"

const initialState = {
  todos: [],
  fetchedTodos: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: state.todos.concat([action.payload]) }
    case FETCH_TODO:
      return { ...state, fetchedTodos: action.payload }
    default: return state
  }

}