import React from 'react';
import { render } from 'react-dom';
import TootlipExample from './Tootlip';
import ButtonExample from './Button';

const kitchenSink = (
  <div className="row column">
    <h1>Mango Components</h1>
    <TootlipExample />
    <ButtonExample />
  </div>
);

const appElement = document.createElement('div');
appElement.id = 'app';
document.body.appendChild(appElement);
render(kitchenSink, document.getElementById('app'));
