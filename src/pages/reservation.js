import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect, Route } from 'react-router-dom'
import '../css/reservation.css'
import { bookReservation } from '../api/index'
import TimePicker from 'react-bootstrap-time-picker';
import AuthService from '../services/AuthService'
import ReserveService from '../services/ReserveService'
import Confirmation from './confirmation'

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.Reserve = new ReserveService()
    this.state = {

      booking: {
        user_id: this.Auth.getUserId(),
        date: "",
        time: "" ,
        party_size: 0,
        table: ""
      },
      reserveSuccess: false,
    }
  }

  handleChange(event){
    console.log('name', event.target.name);
    console.log('value', event.target.value);
    let { booking } = this.state
    booking[event.target.name] = event.target.value
    this.setState({booking: booking})
    console.log(this.state)
  }

  // changeTimeFormat(){
  //     let sec = this.state.booking.time
  //     let min = (sec%3600)/60
  //     let hr = Math.floor(sec/3600)
  //     let timeString = `${hr}:${min}:00`
  //     this.setState(this.booking.time = timeString)
  // }

  handleSubmit(event){
    event.preventDefault()
//    changeTimeFormat()
    bookReservation(this.state.booking).then (successReserve => {
    console.log("Reserve Success!", successReserve); this.setState({reserveSuccess: true})
      // this.Reserve.reserve(this.state.booking).then (successReserve => {
      // console.log("Create Success!", successReserve); this.setState({reserveSuccess: true})
    })
    .catch(err =>{ alert(err) })
  }


  // handleTimeChange(appt){
  //     let { booking } = this.state
  //     booking['time'] = appt
  //     // this.setState({booking: booking})
  //     this.setState({time: appt})
  //     console.log(this.state.booking)
  // }

  handleTimeChange(sec){
      let min = (sec%3600)/60
      let hr = Math.floor(sec/3600)
      let timeString = `${hr}:${min}`
      let { booking } = this.state
      booking['time'] = timeString
      // this.setState({booking: booking})
      this.setState({time: timeString})
      console.log(this.state.booking)
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
                        name="date"
                        type= "date"
                        placeholder="Date"
                        onChange={this.handleChange.bind(this)}
                      /><br/>
                      <TimePicker
                        name="time"
                        type="select"
                        start="11:00"
                        end="20:00"
                        step={30}
                        onChange={this.handleTimeChange.bind(this)} value={this.state.time}
                      /><br/>

                      {/* <select
                          name="time"
                          type="type"
                          onChange={this.handleTimeChange.bind(this)} value={this.state.time}
                          >
                          <option>"05:00"</option>
                          <option>"05:30"</option>
                          <option>"06:00"</option>
                          <option>"06:30"</option>
                          <option>"07:00"</option>
                          <option>"07:30"</option>
                          <option>"08:00"</option>
                          <option>"08:30"</option>
                      </select><br/> */}

                      <FormControl
                        name="party_size"
                        type="Number"
                        placeholder="Party Size"
                        onChange={this.handleChange.bind(this)}
                    /><br/>
                        <form className="box-8">
                            <div class="form-group">
                                <label for="exampleSelect1">Choose Your Table</label>
                                <select class="form-control"
                                    name="table"
                                    id="exampleSelect1"
                                    value={this.state.table}
                                      onChange={this.handleChange.bind(this)}
                                      >
                                  <option>Table 1</option>
                                  <option>Table 2</option>
                                  <option>Table 3</option>
                                  <option>Table 4</option>
                                  <option>Table 5</option>
                                </select>
                            </div>
                            {/* <Confirmation rsvp={this.state.booking} /> */}
                         </form>
                         {/* <Confirmation rsvp={this.state.booking}/>  */}
                      <FormControl
                        type="submit"
                        name="submit"
                        onClick={this.handleSubmit.bind(this)}
                      />
                    </Col>
                  </Form>

                    {this.state.reserveSuccess &&  <Redirect to="/confirmation"/>}



                </Row>
              </Grid>
            </div>

            <div className="container-4">
               <div className="box-7">
                   <div className="table-image">
                       <img src="/assets/images/tablechart2.png"/>
                   </div>
               </div>

            </div>
        </div>

    )
  }


}
export default Reservation
