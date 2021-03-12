import HomeContainer from 'containers/home';
import AboutContainer from 'containers/about';
import WhyWeInvestContainer from 'containers/whyWeInvest';
import CompaniesContainer from 'containers/companies';
import DefaultContainer from 'containers/default';
import CompanyDetailContainer from 'containers/companyDetail';

import { RouteObject } from 'types';

export const RouteMap: { [id: string]: RouteObject } = {
  HOME: {
    path: '/',
    exact: true,
    component: HomeContainer,
  },
  COMPANY_DETAIL: {
    path: '/companies/:id',
    exact: true,
    component: CompanyDetailContainer,
  },
  ABOUT: {
    path: '/about-us',
    exact: true,
    component: AboutContainer,
  },
  COMPANIES: {
    path: '/companies',
    exact: true,
    component: CompaniesContainer,
  },
  WHY_WE_INVEST: {
    path: '/where-we-invest',
    exact: true,
    component: WhyWeInvestContainer,
  },
  DEFAULT: {
    path: '/:id',
    exact: true,
    component: DefaultContainer,
  },
};
