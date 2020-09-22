import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Clients from '../pages/Clients';
import Totals from '../pages/Totals';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Totals} />
    <Route path="/clients" exact component={Clients} />
  </Switch>
);

export default Routes;
