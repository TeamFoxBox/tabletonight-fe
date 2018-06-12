import React, { Component } from 'react';
import reactDOM, {render} from 'react-dom'
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row, Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarHeader
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
			<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/"><img src="/assets/images/logosmall.jpg"/></a>
    </Navbar.Brand>
	<Navbar.Toggle/>
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav>
    <NavItem eventKey={1} href="/register">
      Register
    </NavItem>
    <NavItem eventKey={2} href="/login">
      Login
    </NavItem>
	<NavItem eventKey={3} href="/about">
      About
    </NavItem>
	<NavItem eventKey={4} href="/contactus">
      Contact Us
    </NavItem>
    {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown> */}
  </Nav>
</Navbar.Collapse>
</Navbar>

        )
    }
}
export default withRouter(Header)
