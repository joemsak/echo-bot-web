import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import Shares from './components/shares';
import Post from './components/post';
import User from './components/user';
import Channel from './components/channel';
import Team from './components/team';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/shares" component={Shares} />
    <Route path="/posts/:id" component={Post} />
    <Route path="/users/:id" component={User} />
    <Route path="/channels/:id" component={Channel} />
    <Route path="/teams/:id" component={Team} />
  </Router>,
  document.getElementById('root')
);
