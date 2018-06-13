import React, { Component } from 'react';
import './welcome.css'
import { Redirect, withRouter } from 'react-router-dom'

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state ={
            restaurant:""
        }
    }
    handleSubmit(event){
        let {restaurant} = this.state
        restaurant = event.target.id
        this.setState({restaurant}, this.props.history.push('/reservation', event.target.id))
    }
  render() {
    return (
      <main>
        <section className="container-1">
            <div className="box-0">
                <h1>WELCOME TO TABLE TONIGHT!</h1>
                <p className="description">
                    What's better than making dinner reservations? Making reservations AND being able to choose your seating. That's right! Here at Table Tonight, you can choose to dine wherever your heart desires at your restaurant of choice. Select from our participating venues below and start booking today.
                </p>
            </div>
        </section>

        <section className="container-2">

            <article className="box-1">
                <div className="card-image">
                    <img src="/assets/images/bornandraised.jpg"/>
                </div>
                <h3>Born and Raised</h3>
                <p>
                    LITTLE ITALY
                    San Diego’s newest, swankiest steakhouse is Born & Raised, which opened in fall 2017 after a $6 million build out. The menu is simple: prime cuts aged in-house, killer cocktails (from the bar or a roving cart), and a see-and-be-seen atmosphere unreplicated anywhere in downtown San Diego.
                </p>
                <button
                    type="button"
                    className="btn btn-secondary"
                    id="Born and Raised"
                    onClick={this.handleSubmit.bind(this)}
                >
                    Make a Reservation
                </button>
            </article>

            <article className="box-2">
                <div className="card-image">
                    <img src="/assets/images/campfire.jpg"/>
                </div>
                <h3>Campfire</h3>
                <p>
                    CARLSBAD
                    Paying homage to the great outdoors, Carlsbad’s Campfire lives up to its name with tasteful design reminiscent of the chicest campground, ever. Live fire cooking is the word here, with roasted broccoli being one of the surprising stars on the menu, as well as the whole-grilled fish.
                </p>
                <button type="button" className="btn btn-secondary"  id="Campfire" onClick={this.handleSubmit.bind(this)}>
                    Make a Reservation
                </button>
            </article>

            <article className="box-3">
                <div className="card-image">
                  <img src="/assets/images/cloakandpetal.jpg"/>
                </div>
                <h3>Cloak and Petal</h3>
                <p>
                    LITTLE ITALY
                    Cloak & Petal opened in late 2017 with a focus on high-end Japanese small plates with a highly creative cocktail list. The decor is intended to recall a fever-dreamed Tokyo subway stop with graffiti art, two centerpiece cherry trees, tiled walls and a black, urban edge.
                </p>
                <button type="button" className="btn btn-secondary" id="Cloak and Petal" onClick={this.handleSubmit.bind(this)}>
                  Make a Reservation
                </button>
            </article>

            <article className="box-4">
                <div className="card-image">
                  <img src="/assets/images/corkandcraft.jpg"/>
                </div>
                <h3>Cork and Craft</h3>
                    <p>RANCHO BERNARDO The Cork and Craft is putting forward modern plates imbued with French techniques that are causing a stir in the local culinary scene. Thanks to the large open kitchen, guests get a behind-the-scenes view of all the edible magic Esteban and his staff are creating.</p>
                <button type="button" className="btn btn-secondary" id="Cork and Craft" onClick={this.handleSubmit.bind(this)}>
                  Make a Reservation
                </button>
            </article>

            <article className="box-5">
                <div className="card-image">
                  <img src="/assets/images/kettnerexchange.jpg" />
                </div>
                <h3>Kettner Exchange</h3>
                <p>LITTLE ITALY
                    Considered one of the crown jewels of Little Italy’s exploding dining scene, Kettner Exchange burst onto the scene with a New American menu packed with asian flair, owing to executive chef Brian Redzikowski’s time spent in upscale Japanese kitchens after training at the Culinary Institute of America.</p>
                <button type="button" className="btn btn-secondary" id="Kettner Exchange" onClick={this.handleSubmit.bind(this)}>
                  Make a Reservation
                </button>
            </article>

            <article className="box-6" id="Trust" onClick={this.handleSubmit.bind(this)}>
                <div className="card-image">
                  <img src="/assets/images/trust.jpg"/>
                </div>
                <h3>Trust</h3>
                <p>HILLCREST
                    Chef Brad Wise brought live fire cooking to Hillcrest’s once-waning dining scene when he opened Trust in 2016. Expect creative takes on vegetables, mains with unexpected touches and a stacked cocktail list that satisfies everyone that enjoys sweet and safe to bitter and more curious libations.</p>
                <button type="button" className="btn btn-secondary" id="Trust" onClick={this.handleSubmit.bind(this)}>
                  Make a Reservation
                </button>
            </article>
        </section>
    </main>
    );
  }
}

export default withRouter(Welcome)
