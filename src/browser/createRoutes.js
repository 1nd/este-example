import App from './app/App.react';
import NotFound from './notfound/Page.react';
import Auth from './auth/Page.react';
import Home from './home/Page.react';
import Account from './account/Account.react';
import React from 'react';
import Todos from './todos/Page.react';
import {IndexRoute, Route} from 'react-router';

export default function createRoutes(getState) {

  const requireAuth = (nextState, replace) => {
    const loggedInUser = getState().users.viewer;
    if (!loggedInUser) {
      replace({
        pathname: '/sign_in',
        state: {nextPathname: nextState.location.pathname}
      });
    }
  };

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Auth} path="sign_in" />
      <Route onEnter={requireAuth}>
        <Route component={Account} path="account" />
      </Route>
      <Route component={Todos} path="todos" />
      <Route component={NotFound} path="*" />
    </Route>
  );

}
