import * as React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App';

window.addEventListener('load', () => {
  const appElement = document.createElement('div');
  appElement.id = 'app';
  document.body.appendChild(appElement);
  const store = configureStore();
  render(<App {...{ store }} />, document.getElementById('app'));
});
