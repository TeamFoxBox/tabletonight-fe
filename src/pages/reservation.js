import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../css/reservation.css'
import { createUser } from '../api'
import AuthService from '../services/AuthService';

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      user: {
        time: "",
        party_number: "",
        date: "",
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
      <div className="center2">
        <h1>Reservation</h1>
        Please Make a Reservation here.<br/>
        <Grid>
          <Row>
            <Form>
              <Col className="new-user">
                <FormControl
                  type="integer"
                  date="date"
                  placeholder="Date"
                  onChange={this.handleChange.bind(this)}
                /><br/>
                <FormControl
                  type="integer"
                  time="time"
                  placeholder="Time"
                  onChange={this.handleChange.bind(this)}
                /><br/>
                <FormControl
                  type="integer"
                  partynumber="integer"
                  placeholder="Party Number"
                  onChange={this.handleChange.bind(this)}
              /><br/>
                <FormControl
                  type="submit"
                  name="submit"
                  onClick={this.handleSubmit.bind(this)}
                />
                <img src="/assets/images/reserve.jpg" />
              </Col>
            </Form>
            {this.state.createSuccess && <Redirect to="/confirmation"/> }
          </Row>
        </Grid>
         Log out <a href="/login">here</a>.
      </div>
    )
  }


}
export default Reservation
