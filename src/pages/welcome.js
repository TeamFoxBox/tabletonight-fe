import React, { Component } from 'react';
import './welcome.css'
import { Redirect } from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="container-1">
          <div className="box-0">
            <h2>WELCOME TO TABLE TONIGHT!</h2>
            <p>Whats better than making dinner reservations? Making reservations AND being able to choose your seating. Thats right! Here at Table Tonight, you can choose to dine wherever* your heart desires at your restaurant of choice. Select from our participating venues below and start booking today.</p>
          </div>
        </div>
        <div className="container-2">
          <div className="box-1">
            <div className="card-image">
              <img src="/assets/images/picture.jpeg"/>
            </div>
            <h3>Restaurant 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button" class="btn btn-secondary">
              Make a Reservation
            </button>
          </div>
          <div className="box-2">
            <div className="card-image">
              <img src="/assets/images/image1.jpg" />
            </div>
            <h3>Restaurant 2</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <button type="button" class="btn btn-secondary">
              Make a Reservation
            </button>
          </div>
          <div className="box-1">
            <div className="card-image">
              <img src="/assets/images/pic3.jpg"/>
            </div>
            <h3>Restaurant 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button" class="btn btn-secondary">
              Make a Reservation
            </button>
          </div>
        </div>

        <div className="container-3">
          <div className="box-4">
            <div className="card-image">
              <img src="/assets/images/image2.jpg"/>
            </div>
            <h3>Restaurant 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button" class="btn btn-secondary">
              Make a Reservation
            </button>
          </div>
          <div className="box-5">
            <div className="card-image">
              <img src="/assets/images/pic3.jpg" />
            </div>
            <h3>Restaurant 5</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <button type="button" class="btn btn-secondary">
              Make a Reservation
            </button>
          </div>
          <div className="box-6">
            <div className="card-image">
              <img src="/assets/images/picture.jpeg"/>
            </div>
            <h3>Restaurant 6</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button" class="btn btn-secondary">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome
