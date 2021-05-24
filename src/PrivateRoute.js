// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
return(
  <Route
    {...rest}
    render={props =>
      true ? <Component/> : <Redirect to={{pathname: '/login'}} />}
  />
)}

export default PrivateRoute;
