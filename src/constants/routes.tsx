import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from 'containers/home';
import { RouteMap } from 'constants/RouteMap';

const Routes: React.FC = () => {
  return (
    <Switch>
      {Object.values(RouteMap).map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
      ))}
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  );
};

export default Routes;
