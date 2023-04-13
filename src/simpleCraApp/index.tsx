import React from 'react';
import ReactDOM from 'react-dom/client';
import '../nonJsxFiles/index.css';
import App from './App';
import reportWebVitals from '../nonJsxFiles/reportWebVitals';
import Child from '../components/Child';
import {Component} from "./App"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App>
      <Child/>
      <Component>
        <Child />
      </Component>
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
