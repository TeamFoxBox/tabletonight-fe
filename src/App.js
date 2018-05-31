import React, { Component } from 'react';
import Register from './pages/register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


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
              <Route exact path="/register" component={Register}/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
