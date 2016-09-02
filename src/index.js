import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import TableView from './components/table-view';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/:resource" component={TableView} />
    <Route path="/:resource/:id" component={TableView} />
    <Route path="/:resource/:id/shares" component={TableView} />
  </Router>,
  document.getElementById('root')
);
