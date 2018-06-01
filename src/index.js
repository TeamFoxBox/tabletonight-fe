import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './pages/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/about.js'

import {Root} from './components/Root';
//import {Home} from '.pages/Home';
//import {User} from './pages/About';

class app extends React.Component {
  render() {
      return (
        <Router>
        //Route path="/"component=Home
        //Route path="/about" component={About}/>
      </Router>
    );
  }
}

<Router
  exact
  path="/login"
  component={Login}
/>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
