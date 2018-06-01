import React, { Component } from 'react';
import './welcome.css'

class Welcome extends Component {
  render() {
    return (
      <div>
        {/* Hello world */}
        <div className="awesome" style={{border: '1px solid red'}}></div>
        <h1>Welcome to Table Tonight!</h1>
        <p>Restaurants</p>

        <section>
            <div className="restaurant-card">
                <div className="card-image">
                    <img src="/assets/images/picture.jpeg" />
                </div>

                <div className="card-title">
                    <h3>Restaurants 1</h3>
                    <p>Italian</p>
                </div>

                 <button onclick="myFunction()">Make Reservation here!</button>
            </div>
            <div className="restaurant-card">

                <div className="card-image">
                    <img src="/assets/images/pic3.jpg" />
                </div>

                <div className="card-title">
                    <h3>Restaurants 2</h3>
                    <p>Sushi</p>
                </div>

                <div>
                 <button onClick="myFunction()">Make Reservation here!</button>
                </div>

            </div>
        </section>
      </div>
    );
  }
}

export default Welcome
