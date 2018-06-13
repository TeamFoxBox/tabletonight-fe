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

    <div className="about-background">
      {/* about */}
      <br />
      <h1 className="about">About Us</h1>
      <div className="container-1">
        <div className="box-0">
      <p className="about">Welcome to Table Tonight! We are here to make your dining experiences easy and fun. We are passionate about food and finding the best table available. Founded in 2018 by a group friends in a full stack coding bootcamp.
      </p>
    </div>
    </div>
      {/* <section>
          <div className="about-card">
              <div className="about-image">
                  <img src="/assets/images/groupphoto.jpg" />
              </div>



          </div>
      </section> */}
    </div>
    );
    }
    }




export default About
