import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './pages/welcome'
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register'
import Confirmation from './pages/confirmation'


import About from './pages/about'
import Contactus from './pages/contactus'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }



  handleNewUser(user) {
    console.log(user)
  }


  render() {
    return (
      <div className="App">
				<Router>
					<Switch>
						<Route exact path="/login" component={Login} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register}/>
            <Route exact path="/contactus" component={Contactus}/>
            <Route exact path="/confirmation" component={Confirmation}/>
			  		</Switch>
				</Router>
      </div>
    );
  }
}

export default App;
