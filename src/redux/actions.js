import { CREATE_TODO, FETCH_TODO } from "./types";

export function creatTodo(todo) {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}
