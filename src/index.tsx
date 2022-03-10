import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NewApp} from "./useState/NewApp";
import {Filter} from "./Filter/Filter";
import {FilterTask} from "./FilterTask/FilterTask";
import {Input} from "./Input/Input";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//     <React.StrictMode>
//         <NewApp />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <React.StrictMode>
//         <Filter />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <React.StrictMode>
//         <Filter />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
        <Input/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
