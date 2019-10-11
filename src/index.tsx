import './styles/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList';

ReactDOM.render (
  <ToDoList/>,
  document.getElementById("root")
);