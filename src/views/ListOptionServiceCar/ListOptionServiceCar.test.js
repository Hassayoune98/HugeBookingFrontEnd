import React from 'react';
import ReactDOM from 'react-dom';
import ListOptionServiceCar from './ListOptionServiceCar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListOptionServiceCar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
