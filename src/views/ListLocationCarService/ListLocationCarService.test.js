import React from 'react';
import ReactDOM from 'react-dom';
import ListLocationCarService from './ListLocationCarService';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListLocationCarService />, div);
  ReactDOM.unmountComponentAtNode(div);
});
