// @flow

import * as React from 'react';
import { createComponent as createMadeWithMangoChutneyComponent } from 'mango-components/es/MadeWithMangoChutney';

const MadeWithMangoChutney = createMadeWithMangoChutneyComponent();

function Footer() {
  return (
    <footer>
      <MadeWithMangoChutney />
    </footer>
  );
}

export default Footer;
