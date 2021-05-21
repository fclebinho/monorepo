import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '@namespace/common';
import { EntryList, AccountList } from './Pages';

export const Routes: React.FC = (): ReactElement => {
  return (
    <Switch>
      <PrivateRoute path="/entries" component={EntryList} />
      <Route path="/accounts" component={AccountList} />
    </Switch>
  );
};

export default Routes;
