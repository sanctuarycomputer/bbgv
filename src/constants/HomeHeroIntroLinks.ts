import Language from 'constants/Language';
import { MenuLink } from 'types';

export const AboutUsLinks: MenuLink[] = [
  {
    link: '/why-us#team',
    label: Language.t('HomeHeroIntroLinks.aboutUs.us'),
  },
  {
    link: '/why-us#values',
    label: Language.t('HomeHeroIntroLinks.aboutUs.ourValues'),
  },
  {
    link: '/why-us#press',
    label: Language.t('HomeHeroIntroLinks.aboutUs.news'),
  },
];

export const CompaniesLinks: MenuLink[] = [
  {
    link: '/companies#current-investments',
    label: Language.t('HomeHeroIntroLinks.companies.currentInvestments'),
  },
  {
    link: '/companies#previous-funds',
    label: Language.t('HomeHeroIntroLinks.companies.previousFunds'),
  },
];

export const WhyWeInvestLinks: MenuLink[] = [
  {
    link: '/where-we-invest#thesis',
    label: Language.t('HomeHeroIntroLinks.whyWeInvest.ourThesis'),
  },
  {
    link: '/where-we-invest#investment-guidelines',
    label: Language.t('HomeHeroIntroLinks.whyWeInvest.investmentGuidelines'),
  },
  {
    link: '/where-we-invest#apply',
    label: Language.t('HomeHeroIntroLinks.whyWeInvest.howToApply'),
  },
];
