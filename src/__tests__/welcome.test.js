import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Welcome from '../pages/welcome'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Welcome /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Renders a WELCOME', ()=>{
  const app = mount(<Router><Welcome /></Router>)
  expect(app.find('h1').text()).toContain('WELCOME')
});


test('button starts off with label "Make a Reservation"', () =>{
  const app = mount(<Router><Welcome /></Router>)
  app.find('#Campfire').simulate('click')
  expect(app.find('#Campfire').text()).toContain('Make a Reservation')
})
