import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

it('renders the home component', () => {
  const home = document.createElement('main');
  ReactDOM.render(
  <Home />, home);
  ReactDOM.unmountComponentAtNode(home);
});
