import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/homePage/App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>s
      <Routes>
        <Route path='/' element={ <App/> } />
        <Route path='/detail/:id' element= {<Detail/> }/>
      </Routes>
  </BrowserRouter>
);

