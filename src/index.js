import React from 'react';
import ReactDOM from 'react-dom';
import { bake } from "./shake";

bake();

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);