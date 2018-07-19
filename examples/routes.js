// @flow

import type { Route } from 'react-router';
import { withNavigation } from './components/Navigation';
import { withFooter } from './components/Footer';
import * as Home from './containers/Home';
import * as Avatar from './containers/Avatar';
import * as Button from './containers/Button';
import * as Forms from './containers/Forms';
import * as NoMatch from './containers/NoMatch';
import * as Panel from './containers/Panel';
import * as RadialProgressBar from './containers/RadialProgressBar';
import * as Toast from './containers/Toast';
import * as Tootlip from './containers/Tootlip';
import * as Tristicon from './containers/Tristicon';

// Please generate a key for each route using `uuidgen` because these will be
// spread into react components.

export type ExtendedRoute = {
  ...Route,
  key: string,
  name: string,
  path: string,
  shouldShowInNavigationComponent: boolean,
};

const routes: Array<ExtendedRoute> = [
  {
    component: Home.component,
    exact: true,
    key: '7cc8550d-0aa8-4d21-ad15-5ffedca3e93c',
    name: 'Home',
    path: '/',
    shouldShowInNavigationComponent: true,
  },
  {
    component: Tootlip.component,
    exact: true,
    key: 'd67e7b73-5198-4d62-b38b-ebabe3eb8cd1',
    name: 'Tootlip',
    path: '/components/tootlip',
    shouldShowInNavigationComponent: true,
  },
  {
    component: Button.component,
    exact: true,
    key: 'ffdcdf44-06de-4dca-8f06-78bb7fe4b2d0',
    name: 'Buttons',
    path: '/components/buttons',
    shouldShowInNavigationComponent: true,
  },
  {
    component: Forms.component,
    exact: true,
    key: '82b1acb5-c982-4c3c-b1a8-c7e47792a37c',
    name: 'Forms',
    path: '/components/forms',
    shouldShowInNavigationComponent: true,
  },
  {
    component: Avatar.component,
    exact: true,
    key: 'b7778752-e599-4e60-9618-7f3f65df34bc',
    name: 'Avatar',
    path: '/components/avatar',
    shouldShowInNavigationComponent: true,
  },
  {
    component: Panel.component,
    exact: true,
    key: 'bbf6ca33-8a3e-4f88-bd11-e091b159e5d8',
    name: 'Panel',
    path: '/components/panel',
    shouldShowInNavigationComponent: true,
  },
  {
    component: RadialProgressBar.component,
    exact: true,
    key: '0362ae40-9137-4660-9731-040bba0cbaa5',
    name: 'RadialProgressBar',
    path: '/RadialProgressBar/panel',
    shouldShowInNavigationComponent: true,
  },
  {
    component: Tristicon.component,
    exact: true,
    key: '66213b91-8c59-4be0-b8b1-7b942ae9250e',
    name: 'Tristicon',
    path: '/components/tristicon',
    shouldShowInNavigationComponent: true,
  },
  {
    component: Toast.component,
    exact: true,
    key: 'a4e1d92b-0da3-48cc-9ff6-cc7ee44816a9',
    name: 'Toast',
    path: '/components/toast',
    shouldShowInNavigationComponent: true,
  },
  {
    component: NoMatch.component,
    key: 'dde32c6d-e6ce-45a9-a360-2683fe91590e',
    name: '404',
    shouldShowInNavigationComponent: false,
  },
].map(
  (route: *): ExtendedRoute =>
    ({
      ...route,
      component: withFooter(withNavigation(route.component)),
    }: Object),
);

export default routes;
