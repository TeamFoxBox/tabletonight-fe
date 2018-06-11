import React, { Component } from 'react';
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row
} from 'react-bootstrap'
import AuthService from '../services/AuthService'  // <- We use the AuthService to logout
import { withRouter } from 'react-router-dom'


const Auth = new AuthService() // <- Create a new instance of the Auth service

class Header extends Component {

    handleLogout() { // <- Remove local storage, and redirect the user
        Auth.logout()
        this.props.history.push('/login');
      }

    render() {

        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/"><img src="/assets/images/logosmall.jpg"/></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">

				<li class="nav-item">
			      <a class="nav-link" href="/login">LOGIN</a>
			    </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contactus">Contact Us</a>
                  </li>


                  {/* /* <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li> --> */ }
                </ul>
                 <button type="button" class="btn btn-secondary"  onClick={this.handleLogout.bind(this)}>Logout</button>


              </div>
            </nav>
        )
    }
}
export default withRouter(Header)
