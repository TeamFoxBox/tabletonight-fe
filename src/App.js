import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './pages/welcome'
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login';


import About from './pages/about'

class App extends Component {
  render() {
    return (
      <div className="App">
    <h1>Table Tonight!</h1>

				<Router>
					<Switch>
						<Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/about" component={About} />
			  		</Switch>
				</Router>
      </div>
    );
  }
}

export default App;
