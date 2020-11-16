import HomeContainer from 'containers/home';

import { RouteObject } from 'types';

// TO-DO: Update containers when they have been created.

export const RouteMap: { [id: string]: RouteObject } = {
  HOME: {
    path: '/',
    exact: true,
    component: HomeContainer,
  },
  ABOUT: {
    path: '/about',
    exact: true,
    component: HomeContainer,
  },
  COMPANIES: {
    path: '/companies',
    exact: true,
    component: HomeContainer,
  },
  WHY_WE_INVEST: {
    path: '/why-we-invest',
    exact: true,
    component: HomeContainer,
  },
};
