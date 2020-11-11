import HomeContainer from 'containers/home';

import { RouteObject } from 'types';

export const RouteMap: { [id: string]: RouteObject } = {
  HOME: {
    path: '/',
    exact: true,
    component: HomeContainer,
  },
};
