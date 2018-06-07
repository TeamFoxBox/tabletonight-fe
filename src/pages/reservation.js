import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../css/reservation.css'
import { createUser } from '../api'
import AuthService from '../services/AuthService';
import TimePicker from 'react-bootstrap-time-picker';

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      user: {
        date: "",
        time: 0,
        party_number: 0,
      },
      createSuccess: false,
    }
  }
  handleChange(event){
    let { user } = this.state
    user[event.target.name] = event.target.value
    this.setState({user: user})
    console.log(this.state)
  }
  handleSubmit(event){
    event.preventDefault()
      this.Auth.register(this.state.user).then (successUser => {
      console.log("Create Success!", successUser); this.setState({createSuccess: true})
    })
    .catch(err =>{ alert(err) })
  }
  handleTimeChange(appt){
      this.setState({time: appt})
  }

  render(){
    return(
        <div className="reg_page">
            <div className="res_form">
              <h1>Reservation</h1>
              Please Make a Reservation here.<br/>
              <Grid>
                <Row>
                  <Form>
                    <Col className="new-user">
                      <FormControl
                        type= "date"
                        placeholder="Date"
                        onChange={this.handleChange.bind(this)}
                      /><br/>
                      <TimePicker
                        type="select"
                        start="11:00" end="20:00" step={30}
                        onChange={this.handleTimeChange.bind(this)} value={this.state.time}
                      /><br/>
                      <FormControl
                        type="Number"
                        placeholder="Party Number"
                        onChange={this.handleChange.bind(this)}
                    /><br/>
                      <FormControl
                        type="submit"
                        name="submit"
                        onClick={this.handleSubmit.bind(this)}
                      />
                    </Col>
                  </Form>
                  {this.state.createSuccess && <Redirect to="/confirmation"/> }
                </Row>
              </Grid>
            </div>
            <div className="res_info">
                <img id="waiter_pic" src="/assets/images/reserve.jpg" />
            </div>
        </div>

    )
  }


}
export default Reservation
