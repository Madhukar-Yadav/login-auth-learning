import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './scss/index.scss';

import CustomApp from './CustomApp';
import MyApp from './MyApp';

const element = document.getElementById('content');
ReactDOM.render(
  <BrowserRouter>
    <CustomApp />
  </BrowserRouter>, element);

document.body.classList.remove('loading');