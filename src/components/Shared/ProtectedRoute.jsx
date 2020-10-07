import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: MyComponent, ...rest }) => {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  return (
    <Route {...rest} render={props => isAuthenticated ?
      <MyComponent {...props} /> : <Redirect to={{ pathname: '/login',
        state: { from: props.location } }} />} />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.string
};

export default ProtectedRoute;
