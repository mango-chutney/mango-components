import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import routes from '../routes';

const App = ({ store }) => (
  <Router>
    <Provider {...{ store }}>
      <Switch>{renderRoutes(routes)}</Switch>
    </Provider>
  </Router>
);

export default App;
