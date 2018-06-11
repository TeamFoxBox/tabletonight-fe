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
import Welcome from './welcome'
import { withRouter } from 'react-router-dom'


const Auth = new AuthService()
const BASE = 'http://localhost:3000'


class Confirmation extends Component {
	constructor(props) {
  	super(props)
  		this.state={
			  booking: {
				user_id: "",
				date: "",
				time: 0,
				party_size: 0,
				table: ""
			  }
		  }
	  }

	  componentWillMount() {
  		let userID = Auth.getUserId()
		  		return fetch(BASE + '/bookings/' + userID)
			.then((resp) => {
				console.log("HELLO")
			  return resp.json()
			})
			.then(APIbooking => {
				console.log(APIbooking);
				this.setState({booking: APIbooking})
			})
		}


	render() {
		console.log(this.props.history.location.state)
		let restaurantName = this.props.history.location.state
		let noSpaces = restaurantName.split(" ").join("+")
		let url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBv9dAVbj3Dwf28NZIHt0KtUXIX-scGecs&q='+noSpaces
		let {date, time, party_size, table} = this.state.booking

		return (
			<div>
				<h2>YOUR TABLE IS CONFIRMED for {restaurantName}</h2>
				<h4>Date: {date}</h4>
				<h4>Party Size: {party_size}</h4>
				<h4>table: {table}</h4>
				<iframe
					  width="600"
					  height="450"
					  frameborder="0" style={{border:0}}
					  src={url} allowfullscreen>
				</iframe>
			</div>
		);
	}
}

export default withRouter(Confirmation)

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
