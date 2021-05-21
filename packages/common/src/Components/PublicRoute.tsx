import React, { ReactElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {
  component: any;
  restricted: boolean;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  restricted,
  ...rest
}): ReactElement => {
  const isLogin = (): boolean => {
    return true;
  };

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
