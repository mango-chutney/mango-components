import * as React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import routes from '../routes';
import { withFooter } from '../components/Footer';
import { withNavigation } from '../components/Navigation';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

const Wrapper = styled.div`
  margin: 1rem;
`;

const App = withRouter(
  withNavigation(
    withFooter(props => <Switch {...props}>{renderRoutes(routes)}</Switch>),
  ),
);

export default ({ store }) => (
  <Router>
    <Provider {...{ store }}>
      <Wrapper>
        <App />
      </Wrapper>
    </Provider>
  </Router>
);
