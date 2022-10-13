import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';
import App from "./App";
import ReactDOM from 'react-dom/client';

window.React = React

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)