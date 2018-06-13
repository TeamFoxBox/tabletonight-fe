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
import '../css/contactus.css';


class Contactus extends Component {
//
//   constructor() {
//      super();
//      this.handleSubmit = this.handleSubmit.bind(this);
//    }
//    handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//
//     fetch('/api/form-submit-url', {
//   method: 'POST',
//   body: data,
// });
// }

	render() {
		return (
      <div className="center">
          <div className="form-group">
            <h1>Contact Us</h1>
            <a href="mailto:help@tabletonight.com">
              <h4>help@tabletonight.com</h4>
            </a>

            {/* <form onSubmit={this.handleSubmit && <Redirect to="/">}/>
              <div className="form-group">
                <label className="email" for="inputDefault">Email Address</label>
                <input type="text" className="form-control" placeholder=" " id="inputDefault"/>
              </div>

              <div className="form-group">
                <label className="subject" for="inputDefault">Subject</label>
                <input type="text" className="form-control" placeholder=" " id="inputDefault"/>
              </div>

              <div className="form-group">
                  <label for="exampleTextarea">Enter Comment</label>
                  <textarea className="form-control" id="exampleTextarea" rows="3" />
              </div>

              <FormControl type="submit" name="submit" value="Submit"/>
            </form> */}
          </div>
      </div>

    );
      }
    }



export default Contactus
