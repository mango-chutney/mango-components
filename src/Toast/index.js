// @flow

export {
  ToastConsumer,
  default as ToastProvider,
  transitionStates,
} from './ToastProvider';

export type {
  $TransitionState,
  $ToastOptions,
  $Props as $ToastProviderProps,
  $ToastContext,
} from './ToastProvider';

export type { $Props as $ToastPortalProps } from './ToastPortal';

export {
  ToastPortal,
  createComponent as createToastPortalComponent,
  createStyledComponents as createStyledToastPortalComponents,
  defaultStyleProps as defaultToastPortalStyleProps,
} from './ToastPortal';

export type { $Props } from './Toast';

export { default as RainbowToastComponent } from './RainbowToastComponent';
export { default as PersistentToast } from './PersistentToast';

export {
  Toast,
  animations,
  createComponent,
  createStyledComponents,
  default,
  defaultStyleProps,
} from './Toast';
