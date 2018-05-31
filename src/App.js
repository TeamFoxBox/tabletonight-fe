import React, { Component } from 'react';
import Register from './pages/register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {




handleNewUser(user) {
  console.log(user)
}


  render() {
    return (
      <div className="App">
        <center><h1>Table Tonight!</h1></center>
          <Router>
            <Switch>
              <Route exact path="/register" component={Register}/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
