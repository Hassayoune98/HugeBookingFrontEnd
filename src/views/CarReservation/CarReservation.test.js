import React from 'react';
import ReactDOM from 'react-dom';
import CarDetails from './CarDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
