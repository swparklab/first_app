import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "상우";
const element = <h1>안녕하세요! {name}입니다.</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
)