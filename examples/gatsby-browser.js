// @flow

import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ Root }: any) => {
  const store = configureStore();

  return () => (
    <Provider {...{ store }}>
      <Root />
    </Provider>
  );
};
