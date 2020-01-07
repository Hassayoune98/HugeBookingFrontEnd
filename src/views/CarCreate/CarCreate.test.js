import React from 'react';
import ReactDOM from 'react-dom';
import CarCreate from './CarCreate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
