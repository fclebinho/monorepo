import React, { ReactElement } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }): ReactElement => {
  const isLogin = (): boolean => {
    return true;
  };

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
