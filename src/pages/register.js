import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        email: "",
        username: "",
        password: "",
      },
      createSuccess: false,
    }
  }
  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  handleSubmit(event){
    event.preventDefault
    let { form } = this.state
    this.props.handleNewUser(form)
  }

  render(){
    return(
      <div>
        <center>To start using Table Tonight, please register below.</center>
        <Grid>
          <Row>
            <Form>
              <Col className="new-form">
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
                  name="username"
                  placeholder="Username"
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
                  placeholder="Create User"
                  onClick={this.handleSubmit.bind(this)}
                />
              </Col>
            </Form>
            {this.state.createSuccess && <Redirect to="/login"/> }
          </Row>
      </Grid>
      </div>
    )
  }


}
export default Register
