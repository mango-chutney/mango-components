// @flow

import * as React from 'react';
import MC from 'mango-components';

const MadeWithMangoChutney = MC.MadeWithMangoChutney.createComponent();

function Footer() {
  return <MadeWithMangoChutney />;
}

export default Footer;

export function withFooter(
  WrappedComponent: React.ComponentType<*>,
): React.ComponentType<*> {
  return (props: *) => (
    <div>
      <WrappedComponent {...props} />
      <Footer />
    </div>
  );
}
