import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../css/register.css'
import { createUser } from '../api'


class Register extends Component {
  constructor(props) {
    super(props)
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
    createUser(this.state.user).then (successUser => {
      console.log("Create Success!", successUser); this.setState({createSuccess: true})
    })
  }

  render(){
    return(
      <div className="center">
        <h1>REGISTER</h1>
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
                  type="text"
                  name="password"
                  placeholder="Password"
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
        Already have an account? Log in <a href="/login">here</a>.
      </div>
    )
  }


}
export default Register
