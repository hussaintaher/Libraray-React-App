import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Link } from "react-router-dom";
import App from './App';
import FunctionalComponent from './Screens/FunctionalComponent';
import ClassComponent from './Screens/ClassComponent';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="FunctionalComponent" element={<FunctionalComponent />} />
      <Route path="ClassComponent" element={<ClassComponent />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
