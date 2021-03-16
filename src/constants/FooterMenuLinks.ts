import Language from 'constants/Language';
import { MenuLink } from 'types';

export const CompaniesLinks: MenuLink[] = [
  {
    link: '/companies#current-fund',
    label: Language.t('Footer.currentFund'),
  },
  {
    link: '/companies#previous-funds',
    label: Language.t('Footer.previousFunds'),
  },
];

export const AboutUsLinks: MenuLink[] = [
  {
    link: '/about-us#team',
    label: Language.t('Footer.team'),
  },
  {
    link: '/about-us#values',
    label: Language.t('Footer.values'),
  },
  {
    link: '/about-us#news',
    label: Language.t('Footer.news'),
  },
];

export const WhereWeInvestLinks: MenuLink[] = [
  {
    link: '/where-we-invest#thesis',
    label: Language.t('Footer.thesis'),
  },
  {
    link: '/where-we-invest#investment-guidelines',
    label: Language.t('Footer.investmentGuidelines'),
  },
  {
    link: '/where-we-invest#apply',
    label: Language.t('Footer.apply'),
  },
];
