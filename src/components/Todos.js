import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const Todos = ({ syncTodos }) => {
  if (!syncTodos.length) {
    return(
      <>
        No todo
      </>
    )
  }

  return syncTodos.map(todo => <Todo todo={todo} key={todo.id}/>)
}

const mapStateToProps = state => {
  return {
    syncTodos: state.todos.todos
  }
}

export default connect(mapStateToProps, null)(Todos);
