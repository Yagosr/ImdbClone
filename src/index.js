import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import App from './pages/homePage/App.tsx';
import Search from './pages/search/index.tsx';
import Detail from './pages/detail/index.tsx';
import Menu from './components/menu/index.tsx';
import { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SkeletonTheme
    baseColor={SkeletonTheme.green}
    highLightColor={SkeletonTheme.green}
  >
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <App/> } />
          <Route path='/detail/:id' element= {<Detail/> }/>
          <Route path='/search/:id' element= {<Search/> }/>
          <Route path='/menu' element={<Menu />} />
        </Routes>
    </BrowserRouter>
  </SkeletonTheme>
);

