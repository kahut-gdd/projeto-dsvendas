import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';
import App from "./App";
import ReactDOM from 'react-dom';

window.React = React

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);