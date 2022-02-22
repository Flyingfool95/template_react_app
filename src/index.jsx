import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import IsMobileContextProvider from './contexts/IsMobileContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IsMobileContextProvider>
        <App />
      </IsMobileContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
