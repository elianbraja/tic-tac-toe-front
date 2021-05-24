import React from "react";
import "./App.css";
import Header from './components/Header'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Login from './containers/authentication/Login';
import Signup from './containers/authentication/Signup';
import Playground from './containers/playground/Playground'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/playground" exact component={Playground} />
        <Redirect from="/" to="/playground" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
