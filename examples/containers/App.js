import * as React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import routes from '../routes';
import { withFooter } from '../components/Footer';
import { withNavigation } from '../components/Navigation';

const App = withRouter(
  withNavigation(
    withFooter(props => <Switch {...props}>{renderRoutes(routes)}</Switch>),
  ),
);

export default ({ store }) => (
  <Router>
    <Provider {...{ store }}>
      <App />
    </Provider>
  </Router>
);
