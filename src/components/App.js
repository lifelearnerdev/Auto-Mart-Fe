import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Shared/LandingPage';
import Signup from './authentication/signup/Signup';
import Login from './authentication/login/Login';


const App = () => (
  <>
    <Switch>
      <Route exact path="/" render={props => <LandingPage {...props} />} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
    </Switch>
  </>
);

export default App;
