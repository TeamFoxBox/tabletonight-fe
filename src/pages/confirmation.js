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



class Confirmation extends Component {
	render() {
		return (
      <div>
        <div className="container-1">
          <div className="box0">
          <br />
            <h2>Confirmation Information</h2>
            <p>Congratulations you have successfully booked your reservation!! </p>
          </div>
        </div>

        <div className="card">
  <Table >

    <thead>
      <tr class="table-active">
        <th scope="row">Confirmation Number</th>
        <td>Restaurant Name</td>
        <td>Restaurant Address</td>
        <td>Date</td>
        <td>Time</td>
        <td>Party Size</td>
        <td>Table Number</td>
      </tr>
    </thead>
    <tbody>

   <tr class="table-secondary">
     <th scope="row">ABC123</th>
     <td>Olive Garden</td>
     <td> 333 Olive Street, San Diego, Ca 90000</td>
     <td>06/20/2018</td>
     <td>7:00pm</td>
     <td>2</td>
     <td>Table 2</td>
   </tr>
 </tbody>
</Table>
</div>
</div>


    );
    }
    }



export default Confirmation
