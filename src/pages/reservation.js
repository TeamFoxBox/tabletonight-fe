import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect, Route, withRouter } from 'react-router-dom'
import '../css/reservation.css'
import { bookReservation } from '../api/index'
import TimePicker from 'react-bootstrap-time-picker';
import AuthService from '../services/AuthService'
import ReserveService from '../services/ReserveService'
import Confirmation from './confirmation'
import withAuth from './withAuth'

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.Reserve = new ReserveService()
    this.state = {

      booking: {
        user_id: this.Auth.getUserId(),
        date: "",
        time: "11:00" ,
        party_size: 1,
        table: "Table 1"
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
    let restaurantName = this.props.history.location.state
    return(

        <div className="container-reserv">
            <div className="box-20">
              <h1>Please Make a Reservation for {restaurantName}</h1> <br/>

                                <FormControl name="date" type= "date" placeholder="Date"
                                onChange={this.handleChange.bind(this)}
                                /><br/>
                                <TimePicker
                                name="time" type="select" start="11:00" end="20:00" step={30}
                                onChange={this.handleTimeChange.bind(this)} value={this.state.time}
                                /><br/>
                                <FormControl
                                name="party_size" type="Number" placeholder="Party Size" min={1}
                                onChange={this.handleChange.bind(this)}
                                /><br/>
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
                                <FormControl
                                type="submit"
                                name="submit"
                                onClick={this.handleSubmit.bind(this)}
                                />

                    {this.state.reserveSuccess &&  this.props.history.push('/confirmation', restaurantName) }

            </div>

            <div className="box-21">
                <div className="table-image">
                    <img src="/assets/images/tablechart2.png"/>
                </div>
            </div>
        </div>
    )
  }
}

export default withRouter(withAuth(Reservation))
