import React from 'react';
import s from '../style.module.css';

const Todo = ({ todo }) => {
  return (
    <div className={s.todoText}>
      <div className='card'>
        <div className='card-body'>
          <p>{todo.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
