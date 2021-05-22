import React, { ReactElement } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }): ReactElement => {
  const isLogin = (): boolean => {
    return true;
  };

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest}>
      {isLogin() ? children : <Redirect to={{ pathname: '/signin', state: { from: rest.location } }} />}
    </Route>
  );
};

export default PrivateRoute;
