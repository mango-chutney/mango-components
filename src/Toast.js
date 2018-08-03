// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Portal } from 'react-portal';
import styled, { css, keyframes } from 'styled-components';
import type { ReactComponentStyled as $ReactComponentStyled } from 'styled-components';
import { rem } from 'polished';
import type {
  $ComponentFactory,
  $MangoComponent,
  $StyledSubComponentsFactory,
} from './types';
import { palette } from './constants';

export type $StyledProps = {
  children: React.Node,
  id?: string,
  duration: number, // seconds - if 0 then forever
  active: boolean,
};

export type $Props = {
  ...$StyledProps,
  ToastComponent: React.ElementType,
};

export const defaultStyleProps: {|
  color: ?string,
|} = {
  color: 'inherit',
};

const ToasterFrame = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  left: 0;
  margin: 0;
  pointer-events: none;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
`;

const CloseButton = styled.span`
  font-size: ${rem(12)};
  margin-left: 1rem;
`;

const toastAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  85% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    color: transparent;
    opacity: 0;
  }

  100% {
    padding: 0 1rem;
    height: 0;
    margin: 0;
    opacity: 0;
  }
`;

export const createStyledComponents: $StyledSubComponentsFactory<
  {
    ToastComponent: $ReactComponentStyled<*>,
  },
  typeof defaultStyleProps,
  // eslint-disable-next-line no-unused-vars
> = styleProps => {
  const ToastComponent = styled.a`
    animation: ${toastAnimation} 0.15s ease-out normal forwards;
    background: #fff;
    border-radius: ${rem(4)};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: inline-block;
    margin: 0.25rem;
    overflow: hidden;
    padding: 0.5rem 1rem;
    pointer-events: all;
    user-select: none;
    transition: all 15ms ease;

    ${({ fadingOut }) =>
      fadingOut &&
      css`
        animation: ${fadeOutAnimation} 0.3s ease-out normal forwards;
      `};

    ${({ alert }) =>
      alert &&
      css`
        background: ${palette.alert};
        color: white;
      `};

    ${({ success }) =>
      success &&
      css`
        background: ${palette.success};
        color: white;
      `};

    ${({ inactive }) =>
      inactive &&
      css`
        background: ${palette.inactive};
        color: white;
      `};
  `;

  return { ToastComponent };
};

export type $State = {
  shouldRender: boolean,
  fadingOut: boolean,
};

class Toast extends React.Component<$Props, $State> {
  static defaultProps = {
    duration: 10,
    active: false,
  };

  state = { shouldRender: false, fadingOut: false };

  componentDidMount() {
    // create toaster if doesn't exist
    if (
      document &&
      document.body &&
      document.body !== null &&
      !document.getElementById('mc-toaster-wrapper')
    ) {
      const wrapper = document.createElement('div');
      wrapper.id = 'mc-toaster-wrapper';
      if (document.body !== null) {
        document.body.appendChild(wrapper);
        ReactDOM.render(<ToasterFrame id="mc-toaster" />, wrapper);
      }
    }
  }

  componentWillReceiveProps({ active: next }: $Props) {
    const { active: prev } = this.props;

    if (next && next !== prev) {
      this.activate();
    } else if (!next && next !== prev) {
      this.close();
    }
  }

  close() {
    this.setState({
      fadingOut: true,
    });
    setTimeout(() => {
      this.setState({
        shouldRender: false,
      });
    }, 300);
  }

  activate() {
    const { duration } = this.props;

    clearTimeout(this.timeout);

    this.setState({
      fadingOut: false,
      shouldRender: true,
    });

    if (parseInt(duration, 10) > 0) {
      this.timeout = setTimeout(() => {
        this.close();
      }, parseInt(duration, 10) * 1000);
    }
  }

  timeout: TimeoutID;

  render() {
    const { children, duration, active, ToastComponent, ...rest } = this.props;
    const { shouldRender, fadingOut } = this.state;

    return (
      shouldRender &&
      document &&
      document.getElementById('mc-toaster') && (
        <Portal node={document && document.getElementById('mc-toaster')}>
          <ToastComponent
            active={active}
            duration={duration}
            fadingOut={fadingOut}
            onClick={() => {
              this.close();
            }}
            {...rest}
          >
            {children} <CloseButton>×</CloseButton>
          </ToastComponent>
        </Portal>
      )
    );
  }
}

export const createComponent: $ComponentFactory<$StyledProps> = () => {
  const defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return (props: $StyledProps) => (
    <Toast {...{ ...defaultStyledComponents, ...props }} />
  );
};

export default ({
  defaultStyleProps,
  createStyledComponents,
  createComponent,
}: $MangoComponent<typeof defaultStyleProps, $StyledProps>);
