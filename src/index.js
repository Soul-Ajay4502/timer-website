import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MonaSansExtraLight from '../src/fonts/MonaSans/MonaSans-ExtraLight.ttf'
// import MonaSansMedium from '../src/fonts/MonaSans/MonaSans-Medium.ttf'
// import MonaSansLight from '../src/fonts/MonaSans/MonaSans-Light.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
