import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import stores from './stores';
import services from './services';
import registerServiceWorker from './utils/registerServiceWorker';
import { noop } from 'lodash';

const renderApp = (appState) => {
  ReactDOM
    .render(
    <App {...appState} />,
    document.getElementById('root'));
};

stores
  .subscribe(renderApp);

services
  .subscribe(
  noop,
  console.error.bind(console),
  console.log.bind(console));

registerServiceWorker();