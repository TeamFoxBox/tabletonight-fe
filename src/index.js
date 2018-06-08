import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

// import Login from './pages/login';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import About from './pages/about.js'

// import {Root} from './components/Root';
//import {Home} from '.pages/Home';
//import {User} from './pages/About';



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
