import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from './pages/Context/AuthContext'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContext>
  </React.StrictMode>
);

