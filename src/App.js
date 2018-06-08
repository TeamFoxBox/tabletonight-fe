import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './pages/welcome'
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register'
import Confirmation from './pages/confirmation'
import Reservation from './pages/reservation'
import Table from './pages/table'
import withAuth from './pages/withAuth'
import AuthService from './services/AuthService'  // <- We use the AuthService to logout


//OLD API
//sample new home w/API
// import RestaurantsContainer from './components/RestaurantsContainer'


import About from './pages/about'
import Contactus from './pages/contactus'
import {get_next_course} from './api/yelpapi'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      search: [],
      spots: [],
      rest: [],

    }
  }

  componentDidMount() {
//http://localhost:3000
    fetch("")
//change inside of componet
    console.log("inside of componet")
    get_next_course()
     .then(json => {
        console.log(json)
     })

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
            <Route exact path="/reservation" component={Reservation}/>
            <Route exact path="/table" component={Table}/>




			  		</Switch>
				</Router>
      </div>
    );
  }
}

export default App;
