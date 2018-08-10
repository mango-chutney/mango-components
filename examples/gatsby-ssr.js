// @flow

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

// eslint-disable-next-line import/prefer-default-export
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
}: any) => {
  const store = configureStore();

  replaceBodyHTMLString(
    renderToString(<Provider {...{ store }}>{bodyComponent}</Provider>),
  );
};
