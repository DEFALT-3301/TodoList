import React from 'react';
import AsyncTodos from '../components/AsyncTodos';
import Navbar from '../components/Navbar';

const AsyncPage = () => {
  return (
    <>
       <div>
        <Navbar />
      </div>
      <div className='container'>
        <div>
          <AsyncTodos/>
        </div>
      </div>
    </>
  );
}

export default AsyncPage;
