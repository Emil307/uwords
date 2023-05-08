import React from 'react';
//routing
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Auth from '../pages/Auth/Auth';
import SignUp from '../pages/SignUp/SignUp';
import WordsPage from '../pages/WordsPage/WordsPage';
import WordsSetPage from '../pages/WordsSetPage/WordsSetPage';
//styles
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/words' element={<WordsPage/>} />
        <Route path={'/wordset' + '/:id'} element={<WordsSetPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;