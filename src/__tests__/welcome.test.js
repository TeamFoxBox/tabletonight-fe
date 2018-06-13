import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Welcome from '../pages/welcome'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
  });
