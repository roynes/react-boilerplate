import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

require('dotenv').config();

const Welcome = () => (<h1>Hello world! deez nuts</h1>);

const divRoot = document.createElement('div');

document.body.appendChild(divRoot);

ReactDOM.render(<Welcome />, divRoot);
