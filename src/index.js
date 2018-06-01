import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './pages/login';
import { BrowserRouter as Router } from 'react-router-dom';


<Router
  exact
  path="/login"
  component={Login}
/>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
