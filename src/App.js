
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/login';



class App extends Component {
  render() {
    return (
      <div className="App">
    <h1>Table Tonight!</h1>

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
