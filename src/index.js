import React from 'react';
import ReactDOM from 'react-dom';
import App from './Componentes/App'


// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


ReactDOM.render
(<App />, 
document.querySelector("#root"));

