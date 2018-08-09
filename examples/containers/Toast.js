// @flow

import * as React from 'react';
// Explicitly import from index.js, not from the "main" property of package.json
// in the directory.
import {
  createStyledComponents as createStyledToastComponents,
  defaultStyleProps as defaultToastStyleProps,
  createComponent as createToastComponent,
  createToastPortalComponent,
  ToastConsumer,
  ToastProvider,
  RainbowToastComponent,
  PersistentToast as PersistentToastController,
} from 'mango-components/es/Toast';

const Toast = createToastComponent();

const ToastPortal = createToastPortalComponent();

const { ToastComponent } = createStyledToastComponents(defaultToastStyleProps);

const Unicorn = () => (
  <span role="img" aria-label="unicorn">
    🦄
  </span>
);

const TransientToast = props => (
  <Toast {...props}>
    Easy come, easy go. <Unicorn />
  </Toast>
);

const PersistentToast = props => (
  <PersistentToastController {...{ ToastComponent, ...props }}>
    I&rsquo;ll stick around. <Unicorn />
  </PersistentToastController>
);

const CoolToast = props => (
  <PersistentToastController
    {...{ ToastComponent: RainbowToastComponent, ...props }}
  >
    See you space cowboy. <Unicorn />
  </PersistentToastController>
);

const ToastExample = () => (
  <div>
    <ToastProvider {...{ PortalComponent: ToastPortal }}>
      <h1>Toast</h1>
      <ToastConsumer>
        {({ createToast }) => (
          <>
            <section>
              <h2>Transient toast</h2>
              <button
                type="button"
                onClick={() => {
                  createToast(TransientToast);
                }}
              >
                Click
              </button>
            </section>
            <section>
              <h2>Persistent toast</h2>
              <button
                type="button"
                onClick={() => {
                  createToast(PersistentToast, { persistent: true });
                }}
              >
                Click
              </button>
            </section>
            <section>
              <h2>Cool toast</h2>
              <button
                type="button"
                onClick={() => {
                  createToast(CoolToast, { persistent: true });
                }}
              >
                Click
              </button>
            </section>
          </>
        )}
      </ToastConsumer>
    </ToastProvider>
  </div>
);

export const component = ToastExample;

export default component;
