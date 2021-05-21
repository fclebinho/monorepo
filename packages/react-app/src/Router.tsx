import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Dashboard, EntryList, AccountList, NotFound } from './Pages';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/sign-in" />
      <Route path="/sign-in">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/entries">
        <EntryList />
      </Route>
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
