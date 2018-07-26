// @flow

import * as React from 'react';
import { createComponent as createMadeWithMangoChutneyComponent } from 'mango-components/es/MadeWithMangoChutney';

const MadeWithMangoChutney = createMadeWithMangoChutneyComponent();

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
