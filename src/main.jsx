import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
