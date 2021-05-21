import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from '@namespace/common';
import { EntryList, AccountList } from '@namespace/finance';
import { Login, Dashboard, NotFound } from './Pages';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/signin" />
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <PrivateRoute path="/entries" component={EntryList} />
      <Route path="/accounts">
        <AccountList />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
