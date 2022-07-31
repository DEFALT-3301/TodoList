import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GreetingsPage from './pages/GreetingsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/greetings' element={<GreetingsPage />}/>
      <Route path='/home' element={<HomePage />}/>
    </Routes>
  );
}

export default App;
