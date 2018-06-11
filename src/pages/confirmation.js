import React, {Component} from 'react'
import '../css/confirmation.css';
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row,
  Table
} from 'react-bootstrap'
import Reservation from './reservation'
import AuthService from '../services/AuthService'


const Auth = new AuthService()
const BASE = 'http://localhost:3000'


class Confirmation extends Component {
	constructor(props) {
  	super(props)
  		this.state={
			  booking: {
				user_id: "",
				date: "",
				time: "",
				party_size: 0,
				table: ""
			}
		  }
	  }

	changeTimeFormat(preAPIbooking){
  		  let bookingObj = preAPIbooking
  		  let {time} = preAPIbooking
  		  let timeObj = new Date(time)
  		  let hr = timeObj.getUTCHours()
  		  let min = timeObj.getMinutes()
  		  let period = (hr > 11)? "PM" : "AM"
  		  if (hr > 12){ hr -= 12 }
  		  bookingObj.time = `${hr}:${min} ${period}`
  		  return bookingObj
  	  }

	componentWillMount() {
		let userID = Auth.getUserId()
	  		return fetch(BASE + '/bookings/' + userID)
		.then((resp) => {
			//console.log("HELLO")
			return resp.json()
		})
		.then( preAPIbooking => {
			return this.changeTimeFormat(preAPIbooking)
		})
		.then(APIbooking => {
			console.log(APIbooking);
			this.setState({booking: APIbooking})
		})
	}




	render() {
		let {date, time, party_size, table} = this.state.booking


		return (
			<div>
				<h2>YOUR TABLE IS CONFIRMED!!!!</h2>
				<h4>Date: {date}</h4>
				<h4>Time: {time}</h4>
				<h4>Party Size: {party_size}</h4>
				<h4>Table: {table}</h4>

			</div>
		);
	}
}

export default Confirmation

//
//
// // 		return (
// //
// //       <div>
// //         <div className="container-1">
// //           <div className="box0">
// //           <br />
// //             <h2>Confirmation Information</h2>
// //             <p>Congratulations you have successfully booked your reservation!! </p>
// //           </div>
// //         </div>
// // <div className="card">
// //   <Table >
// //
// //     <thead>
// //       <tr class="table-active">
// //         <th scope="row">Confirmation Number</th>
// //         <td>Restaurant Name</td>
// //         <td>Restaurant Address</td>
// //         <td>Date</td>
// //         <td>Time</td>
// //         <td>Party Size</td>
// //         <td>Table Number</td>
// //       </tr>
// //     </thead>
// //     <tbody>
// //
// //    <tr class="table-secondary">
// //      <th scope="row">ABC123</th>
// //      <td>Olive Garden</td>
// //      <td> 333 Olive Street, San Diego, Ca 90000</td>
// //      <td>06/20/2018</td>
// //      <td>7:00pm</td>
// //      <td>2</td>
// //      <td>Table 2</td>
// //    </tr>
// //  </tbody>
// // </Table>
// // </div>
// // </div>
// //
// //
// //     );
// //     }
//     /
