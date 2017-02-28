/*
 * examples/index.js
 */

import React from 'react';
import { render } from 'react-dom';
import TootlipExample from './Tootlip';

const kitchenSink = (
  <div className="row column">
    <h1>Mango Components</h1>
    <TootlipExample />
  </div>
);

render(kitchenSink, document.getElementById('app'));
