import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();
ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
