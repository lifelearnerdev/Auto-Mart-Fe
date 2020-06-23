import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Shared/LandingPage';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" render={props => <LandingPage {...props} />} />
    </Switch>
  </>
);

export default App;
