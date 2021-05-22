import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from '@namespace/common';
import { EntryList, AccountList } from '@namespace/finance';
import { Login, Dashboard, Template, NotFound } from './Pages';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/signin" />
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Template>
          <Dashboard />
        </Template>
      </Route>
      <PrivateRoute path="/entries">
        <Template>
          <EntryList />
        </Template>
      </PrivateRoute>
      <Route path="/accounts/:id">
        <Template>
          <AccountList />
        </Template>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
