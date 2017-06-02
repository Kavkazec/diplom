/* eslint-disable react/jsx-filename-extension, no-undef*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import Main from './pages/Main';
import * as routes from './routes';
import rootReducer from './reducers';
import notificationMiddleware from './components/Notifications/redux/notification.middleware';
import PageNotFound from './pages/PageNotFound';
import Review from './pages/Review';
import PersonalPage from './pages/PersonalPage';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const logger = createLogger();
const router = routerMiddleware(browserHistory);
const store = createStore(
  rootReducer,
  applyMiddleware(router, thunk, promise, logger, notificationMiddleware)
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={routes.root}>
        <IndexRoute component={Main} />
        <Route path={routes.index} component={Main} />
        <Route path={routes.photographer} component={Review} />
        <Route path={routes.personalPage} component={PersonalPage} />
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
