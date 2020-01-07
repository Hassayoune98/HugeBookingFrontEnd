import React from 'react';
import ReactDOM from 'react-dom';
import ServiceCreate from './ServiceCreate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServiceCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
