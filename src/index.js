import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/homePage/App.tsx';
import Menu from './components/menu/index.tsx';
import Navigation from './components/navigation/index.tsx';
import DetailModal from './components/navigation/detailModal/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <App />
    <Navigation />
  </React.StrictMode>
);

