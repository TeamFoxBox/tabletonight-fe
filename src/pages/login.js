import React, { Component } from 'react';
import '../css/login.css';
import AuthService from '../services/AuthService';
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'


class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.Auth.login(this.state.email,this.state.password)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="background-image2">
        <div className="center2">
          <h2><div className="loghead">LOG IN</div></h2>
          <Grid>
            <Row>
              <Form onSubmit={this.handleFormSubmit.bind(this)}>
                <Col className="new-user">
                  <FormControl
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.email}
                  />
                  <FormControl
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.password}
                  /><br/>
                  <FormControl
                    type="submit"
                    name="submit"
                    value="submit"

                  />
                </Col>
              </Form>
            </Row>
          </Grid><br/>
          <div className="logtext">
            Don't have an account yet? Register <a href="/register">here</a>.
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
