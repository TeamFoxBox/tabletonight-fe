import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Reservation from '../pages/reservation'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Reservation /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('has a date input', ()=>{
//   const component = mount(<Router><Reservation /></Router>)
//  expect(component.find('FormControl#type').text()).toBe("date")
// })
//
//
// it('has a submit button', ()=>{
//   const component = mount(<Router><Reservation /></Router>)
//   expect(component.find('button#submit').text()).toBe("Submit")
// })
//
// const reservation = [
//   {
//     date: '6/13/2018',
//     time: '11:00 am',
//     party_size: '2',
//     table: 4
//   }
//
// ]
