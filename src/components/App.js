import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Shared/LandingPage';
import Signup from './authentication/signup/Signup';
import Login from './authentication/login/Login';
import Cars from './cars/cars/Cars';
import Car from './cars/car/Car';
import ProtectedRoute from './shared/ProtectedRoute';


const App = () => (
  <>
    <Switch>
      <Route exact path="/" render={props => <LandingPage {...props} />} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <ProtectedRoute exact path="/cars" component={(props) => <Cars {...props} />} />
      <ProtectedRoute exact path="/cars/:id" component={(props) => <Car {...props} />} />
      {/* <Route exact path="/car" render={(props) => <Car {...props} />} /> */}
    </Switch>
  </>
);

export default App;
