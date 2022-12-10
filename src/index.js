import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import App from './App'

// import reportWebVitals from './reportWebVitals';

// const script = ReactDOM.createRoot(document.getElementById('script')) 
// script.src = "http://api.map.baidu.com/api?type=webgl&v=1.0&ak=8U4fxT7GFqgxPivHgUMHAk9qP0cI7cG9"

// ReactDOM.render(<App />, document.getElementById('container'));
const root = ReactDOM.createRoot(document.getElementById('root'));
// const script = document.createElement('script')
// script.type = 'text/javaScript'
// script.src = 'http://api.map.baidu.com/api?type=webgl&v=1.0&ak=8U4fxT7GFqgxPivHgUMHAk9qP0cI7cG9'
// // script.onerror = reject
// document.body.appendChild(script)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
