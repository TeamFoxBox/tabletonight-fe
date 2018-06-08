import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../css/reservation.css'
import { bookReservation } from '../api/index'
import TimePicker from 'react-bootstrap-time-picker';
import AuthService from '../services/AuthService'
import ReserveService from '../services/ReserveService'


class Reservation extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.Reserve = new ReserveService()
    this.state = {
      booking: {
        user_id: this.Auth.getUserId(),
        date: "",
        time: 0,
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

  handleSubmit(event){
    event.preventDefault()
    bookReservation(this.state.booking).then (successReserve => {
    console.log("Reserve Success!", successReserve); this.setState({reserveSuccess: true})

      // this.Reserve.reserve(this.state.booking).then (successReserve => {
      // console.log("Create Success!", successReserve); this.setState({reserveSuccess: true})
    })
    .catch(err =>{ alert(err) })
  }

  handleTimeChange(appt){
      console.log(appt)
      let { booking } = this.state
      booking['time'] = appt
      this.setState({booking: booking})
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
                        type="select"
                        time="11:00" step={30}
                        onChange={this.handleTimeChange.bind(this)} value={this.state.time}
                      /><br/>
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
                         </form>
                      <FormControl
                        type="submit"
                        name="submit"
                        onClick={this.handleSubmit.bind(this)}
                      />
                    </Col>
                  </Form>
                  {this.state.reserveSuccess && <Redirect to="/confirmation"/> }
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
