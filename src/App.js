import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './pages/welcome'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <div className="App">
    <h1>Table Tonight!</h1>
        <Welcome />
				<Router>
					<Switch>
						<Route exact path="/login" component={Login} />

			  		</Switch>
				</Router>
      </div>
    );
  }
}

export default App;
