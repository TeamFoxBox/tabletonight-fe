import React, {Component} from 'react'
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row,
  Form
} from 'react-bootstrap'


class Contactus extends Component {

  constructor() {
     super();
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
  method: 'POST',
  body: data,
});
}
	render() {
		return (
      <div className="center">
        <div className="card">
          <div class="form-group">
            <h1>Contact Us</h1>
            <a href="mailto:help@tabletonight.com">
              <h4>help@tabletonight.com</h4>
            </a>
            
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label class="email" for="inputDefault">Email Address</label>
                <input type="text" class="form-control" placeholder=" " id="inputDefault"/>
              </div>

              <div class="form-group">
                <label class="subject" for="inputDefault">Subject</label>
                <input type="text" class="form-control" placeholder=" " id="inputDefault"/>
              </div>


              <div class="form-group">
                  <label for="exampleTextarea">Enter Comment</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3" />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    );
      }
    }



export default Contactus
