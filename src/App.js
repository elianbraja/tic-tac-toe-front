import React from "react";
import "./App.css";
import Header from './components/Header'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Login from './containers/authentication/Login';
import Signup from './containers/authentication/Signup';
import Playground from './containers/playground/Playground'
import currentUserQuery from './queries/user/CurrentUser'
import { graphql } from 'react-apollo';

function App({ data: { loading, error, currentUser }}){
  return (
    <BrowserRouter>
      <Header/>
      {!loading ?
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <PrivateRoute path="/playground" exact component={Playground} user={currentUser}/>
          <Redirect from="/" to="/playground" />
        </Switch>
        :
        null}
    </BrowserRouter>
  );
}

export default graphql(currentUserQuery)(App);
