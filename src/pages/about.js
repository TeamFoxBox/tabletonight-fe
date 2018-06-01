import React, {Component} from 'react'
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row
} from 'react-bootstrap'

import '../css/about.css'

class About extends Component {
	render() {
		return (

    <div>
      {/* about */}
      <div className="us" style={{border: '1px solid white'}}></div>
      <h1>About Us</h1>
      <p>Welcome to Table Tonight! We are here to make your dinning experinces easy and fun.</p>
      <p> Founded in 2018 by a group! </p>

      <section>
          <div className="about-card">
              <div className="about-image">
                  <img src="/assets/images/groupphoto.jpg" />
              </div>

              <div className="card-title">
                  <h2>Contact Us</h2>
                  <p>Email: help@tabletonight.com</p>
                  <p>Phone:1-800-555-5555</p>
                  <p>Address: 1000 L Street San Diego, Ca 99999</p>
              </div>

          </div>
      </section>
    </div>
    );
    }
    }




export default About
