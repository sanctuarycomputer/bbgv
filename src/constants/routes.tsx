import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { RouteMap } from 'constants/RouteMap';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      {Object.values(RouteMap).map((route) => (
        <Route
          exact={'exact' in route ? route.exact : true}
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
