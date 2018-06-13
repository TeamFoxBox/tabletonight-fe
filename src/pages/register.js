import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../css/register.css'
import { createUser } from '../api'
import AuthService from '../services/AuthService';

class Register extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      createSuccess: false,
    }
  }
  handleChange(event){
    let { user } = this.state
    user[event.target.name] = event.target.value
    this.setState({user: user})
  }
  handleSubmit(event){
    event.preventDefault()
      this.Auth.register(this.state.user).then (successUser => {
      console.log("Create Success!", successUser); this.setState({createSuccess: true})
    })
    .catch(err =>{ alert(err) })
  }

  render(){
    return(
      <div className="background-image">
      <div className="center1">
        <h2>REGISTER</h2>
        To start making reservations, please register below.<br/>
        <Grid>
          <Row>
            <Form>
              <Col className="new-user">
                <FormControl
                  type="text"
                  name="name"
                  placeholder="First and Last Name"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange.bind(this)}
                /><br/>
                <FormControl
                  type="submit"
                  name="submit"
                  onClick={this.handleSubmit.bind(this)}
                />
              </Col>
            </Form>
            {this.state.createSuccess && <Redirect to="/login"/> }
          </Row>
        </Grid>
        <br/>
        <div className="regtext">
          Already have an account? <br />
          <a href="/login">Log in here</a>.
        </div>
      </div>
    </div>
    )
  }
}
export default Register
