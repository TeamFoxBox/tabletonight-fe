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


//API
//sample new home w/API
import RestaurantsContainer from './components/RestaurantsContainer'


import About from './pages/about'
import Contactus from './pages/contactus'

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
    fetch("https://table-tonight-be.herokuapp.com/")
      .then((res) => res.json())
      .then((json) => {
      })
  }

  handleNewUser(user) {
    console.log(user)
  }

//API Search Bar
  handleSearch = (searchTerm) => {
    const token = localStorage.getItem("jwtToken")
    const body = JSON.stringify(searchTerm)
    return fetch("https://table-tonight-be.herokuapp.com/", {
        method: "POST",
        headers: {
        'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `${token}`
       },
       'body': body
   })
    .then(res => res.json())
    .then(res => res = res.businesses.slice(0,8))
    .then(res => this.setState({
      search: res
    }))
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

            <Route path="/spots" render={(props) => <RestaurantsContainer user={this.state.user} spots={this.state.spots} {...props} searchResults={this.state.search} handleSearch={this.handleSearch}/>}/>


			  		</Switch>
				</Router>
      </div>
    );
  }
}

export default App;
