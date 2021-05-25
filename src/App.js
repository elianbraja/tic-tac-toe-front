import React from "react";
import "./App.css";
import Header from './components/Header'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Login from './containers/authentication/Login';
import Signup from './containers/authentication/Signup';
import Playground from './containers/playground/Playground'
import Generic from './containers/generic/Generic'
import CURRENT_USER from './queries/user/CurrentUser'
import { useQuery } from '@apollo/react-hooks';


function App(){
  const {data:current_user, loading: loading} = useQuery(CURRENT_USER)
  return (
    <BrowserRouter>
      <Header user={current_user}/>
      {!loading ?
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/generic" component={Generic}/>
          <PrivateRoute path="/playground" exact component={Playground} user={current_user}/>
          <Redirect from="/" to="/playground" />
        </Switch>
        :
        null}
    </BrowserRouter>
  );
}

export default App;
