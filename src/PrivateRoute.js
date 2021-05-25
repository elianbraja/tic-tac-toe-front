// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, user, ...rest }) =>{
let current_user = user || rest.location.state
return(
  <Route
    {...rest}
    render={props =>
      current_user ?
      <Component currentUser={current_user} {...props} />
      :
      <Redirect to={{pathname: '/login'}}/>
    }
  />
)};

export default PrivateRoute;
