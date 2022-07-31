import React from 'react';
import Navbar from '../components/Navbar';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';
import s from '../style.module.css';

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={s.animShow}>
        <div className='container'>
          <div className={s.todoForm}>
            <TodoForm />
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
