// @flow

import * as React from 'react';

export type $Props = {
  ButtonComponent: React.ElementType,
};

const ButtonComposer = (props: $Props) => {
  const { ButtonComponent, ...rest } = props;

  return <ButtonComponent {...rest} />;
};

export default ButtonComposer;
