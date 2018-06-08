import React, { Component } from 'react';
import RestaurantList from '../components/RestaurantList';
import SearchForm from '../components/SearchForm';



class Newhome extends Component {
  constructor(props) {
      super(props)
      this.state = {
        restaurants: []
      }
    }

    componentDidMount() {
      fetch('')
      .then(response => response.json())
      .then(responseData => {
        //debugger
        this.setState({ restaurants: responseData.data});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    render() {
      console.log(this.state.restaurants);
      return (
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">Restaurant Search</h1>
              <SearchForm />
            </div>
          </div>
          <div className="main-content">
            <RestaurantList data={this.state.restaurants}/>
          </div>
        </div>
      );
    }
}



  export default Newhome
