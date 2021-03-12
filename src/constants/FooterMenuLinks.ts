import Language from 'constants/Language';
import { MenuLink } from 'types';

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
    link: '/about-us#press',
    label: Language.t('Footer.newsAndPress'),
  },
];

export const WhereWeInvestLinks: MenuLink[] = [
  {
    link: '/where-we-invest#opportunity',
    label: Language.t('Footer.opportunity'),
  },
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
