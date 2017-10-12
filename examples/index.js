import React from 'react';
import { render } from 'react-dom';
import TootlipExample from './Tootlip';

const kitchenSink = (
  <div className="row column">
    <h1>Mango Components</h1>
    <TootlipExample />
  </div>
);

const appElement = document.createElement('div');
appElement.id = 'app';
document.body.appendChild(appElement);
render(kitchenSink, document.getElementById('app'));
