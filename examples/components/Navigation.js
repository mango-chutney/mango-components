// @flow

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import routes from '../routes';
import type { ExtendedRoute } from '../routes';

function Navigation(props: { location: Location }) {
  const { location } = props;

  return (
    <ul>
      {routes
        .filter(
          (route: ExtendedRoute) =>
            route.path && route.shouldShowInNavigationComponent,
        )
        .map(route => (
          <li key={route.key}>
            {location.pathname === route.path ? (
              <NavLink to={route.path}>{route.name}</NavLink>
            ) : (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <Link to={route.path}>{route.name}</Link>
            )}
          </li>
        ))}
    </ul>
  );
}

export default Navigation;

export function withNavigation(
  WrappedComponent: React.ComponentType<*>,
): React.ComponentType<*> {
  return (props: { location: Location }) => {
    const { location } = props;
    return (
      <div>
        <Navigation {...{ location }} />
        <WrappedComponent {...props} />
      </div>
    );
  };
}
