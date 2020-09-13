import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Totals from '../pages/Totals';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Totals} />
  </Switch>
);

export default Routes;
