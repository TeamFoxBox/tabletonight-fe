import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../css/reservation.css'
import { bookReservation } from '../api/'
import TimePicker from 'react-bootstrap-time-picker';
import AuthService from '../services/AuthService'
import ReserveService from '../services/ReserveService'


class Reservation extends Component {
  constructor(props) {
    super(props)
    this.Reserve = new ReserveService()
    this.state = {
      reservation: {
        date: "",
        time_start: 0,
        // party_number: 0,
      },
      reserveSuccess: false,
    }
  }
  handleChange(event){
    let { reservation } = this.state
    reservation[event.target.name] = event.target.value
    this.setState({reservation: reservation})
    console.log(this.state)
  }
  handleSubmit(event){
    event.preventDefault()
    bookReservation(this.state.reservation).then (successReserve => {
    console.log("Create Success!", successReserve); this.setState({reserveSuccess: true})

      // this.Reserve.reserve(this.state.reservation).then (successReserve => {
      // console.log("Create Success!", successReserve); this.setState({reserveSuccess: true})
    })
    .catch(err =>{ alert(err) })
  }
  handleTimeChange(appt){
      this.setState({time_start: appt})
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
                        onChange={this.handleTimeChange.bind(this)} value={this.state.time_start}
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
                  {this.state.reserveSuccess && <Redirect to="/table"/> }
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
