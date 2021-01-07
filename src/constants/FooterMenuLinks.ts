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

export const WhyWeInvestLinks: MenuLink[] = [
  {
    link: '/why-we-invest#opportunity',
    label: Language.t('Footer.opportunity'),
  },
  {
    link: '/why-we-invest#thesis',
    label: Language.t('Footer.thesis'),
  },
  {
    link: '/why-we-invest#investment-guidelines',
    label: Language.t('Footer.investmentGuidelines'),
  },
  {
    link: '/why-we-invest#apply',
    label: Language.t('Footer.apply'),
  },
];
