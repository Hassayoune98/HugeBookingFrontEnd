import React from 'react';
import ReactDOM from 'react-dom';
import CalendarEv from './CalendarEv';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalendarEv />, div);
  ReactDOM.unmountComponentAtNode(div);
});
