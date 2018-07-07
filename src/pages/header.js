import React, { Component } from 'react';
import reactDOM, {render} from 'react-dom'
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row, Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarHeader, Toggle, Brand, Collapse
} from 'react-bootstrap'
import AuthService from '../services/AuthService'  // <- We use the AuthService to logout
import { withRouter } from 'react-router-dom'
import '../css/header.css'




const Auth = new AuthService() // <- Create a new instance of the Auth service

class Header extends Component {

    handleLogout() { // <- Remove local storage, and redirect the user
        Auth.logout()
        this.props.history.push('/login');
      }



    render() {
		return(
			<header>
				<div className="logo">
					  <a href="/"><img src="/assets/images/logosmall.jpg"/></a>
				</div>
				<nav>
					<ul>
						{/* {!Auth.loggedIn() &&
						  <li className="item"><a href="/login">Login</a></li>
					  } */}
					  <li className="item"><a href="/login">Login</a></li>

					  	{/* {!Auth.loggedIn() &&
						   <li className="item"> <a href="/register">Register</a></li>
					  } */}
					  <li className="item"> <a href="/register">Register</a></li>

						 <li className="item"><a href="/about">About</a></li>
						 <li className="item"><a href="/reservation">Reservation</a></li>
						  <li className="item"><a href="/contactus">Contact Us</a></li>
						  {Auth.loggedIn() &&
						  <li className="item"><a href="/" onClick={this.handleLogout.bind(this)}>Logout</a></li>
					  }
					</ul>
				</nav>
			</header>




        )
    }
}
export default withRouter(Header)
