import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Counter1, Counter2 } from './usingHooks/onClick';
import Clockstate1 from './usingHooks/ClockState1';
import Clockstate2 from './usingHooks/ClockState2';
import Clockstate3 from './usingHooks/ClockState3';
import Useeffect1 from './Useeffect/Useeffect1';

// 기본으로 작성되는 부분 주석처리
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Counter1/>
  <Counter2/>
  <Clockstate1/>
  <Clockstate2/>
  <Clockstate3/>
  <Useeffect1/>
</React.StrictMode>,
document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
