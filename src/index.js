/**
 * @author  https://github.com/silence717
 * @date on 2017-03-17
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import "./styles/style.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

/*
书写 stateless react注意事项：
  1. Avoid this keyword
  2. Enforced best practices
  3. High signal-to-noise ratio
  4. Enhanced code completion / intellisense
  5. Bloated components are obvious
  6. Easy to understand
  7. Easy to test
  8. Performance
**/
