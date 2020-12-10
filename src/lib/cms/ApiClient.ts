import * as Cms from 'lib/cms/types';
import Sanity from 'lib/cms/SanityClient';
import SeoSettingsGroq from './groq/SeoSettings';
import HomeHeroGroq from './groq/HomeHero';
import HeroTextModuleGroq from './groq/HeroTextModule';
import GlobalSettingsGroq from './groq/GlobalSettings';
import NewsletterGroq from './groq/Newsletter';
import FoundersImpactSlideshowGroq from './groq/FoundersImpactSlideshow';
import TextModuleGroq from './groq/TextModule';
import TextModuleWithParagraphsGroq from './groq/TextModuleWithParagraphs';
import PressListModuleGroq from './groq/PressList';
import TeamMemberGridGroq from './groq/TeamMemberGrid';
import InvestmentsListModuleGroq from './groq/InvestmentsListModule';
import DefaultPageContentGroq from './groq/DefaultPageContent';
import CompanyDetailPageContentGroq from './groq/CompanyDetailPageContent';
import FounderGroq from './groq/Founder';
import CompanyDetailLandingGroq from './groq/CompanyDetailLanding';

const ApiClient: {
  fetchGlobalSettings(): Promise<Cms.GlobalSettings | any>;
  fetchHome(): Promise<Cms.HomePage | any>;
  fetchAboutPage(): Promise<Cms.AboutPage | any>;
  fetchWhyWeInvestPage(): Promise<Cms.WhyWeInvestPage | any>;
  fetchCompaniesPage(): Promise<Cms.CompaniesPage | any>;
  fetchDefaultPage(slug: string): Promise<Cms.DefaultPage | any>;
  fetchCompanyDetailPage(slug: string): Promise<Cms.CompanyDetailPage | any>;
} = {
  async fetchGlobalSettings() {
    const response = await Sanity.fetch(`*[_type == 'globalSettings'][0]${GlobalSettingsGroq}`);

    return response;
  },
  async fetchHome() {
    const response = await Sanity.fetch(`*[_type == 'home' && _id == '_home'][0] {
      'hero': ${HomeHeroGroq},
      'seo': ${SeoSettingsGroq},
      'foundersImpactSlideshow': ${FoundersImpactSlideshowGroq},
      'foundersImpactSectionHeading': ${TextModuleGroq},
      'featuredFoundersCarouselSectionHeading': featuredFoundersCarouselSectionHeading${TextModuleGroq},
      'whyWeInvest': whyWeInvest${TextModuleGroq},
      'foundersImpactSectionHeading': foundersImpactSectionHeading${TextModuleGroq},
      'contact': contact${TextModuleGroq},
      'newsletter': ${NewsletterGroq},
      _type,
    }`);

    return response;
  },
  async fetchAboutPage() {
    const response = await Sanity.fetch(`*[_type == 'about' && _id == '_about'][0] {
      _type,
      'seo': ${SeoSettingsGroq},
      'hero': ${HeroTextModuleGroq},
      'teamHeading': teamHeading${TextModuleGroq},
      'teamMemberGrids': teamMembers[]${TeamMemberGridGroq},
      'valuesSection': valuesSection${TextModuleWithParagraphsGroq},
      'pressHeading': pressHeading${TextModuleGroq},
      'pressList': pressList${PressListModuleGroq},
      'contact': contactSection${TextModuleGroq},
      ...
    }`);

    return response;
  },
  async fetchWhyWeInvestPage() {
    const response = await Sanity.fetch(`*[_type == 'whyWeInvest' && _id == '_whyWeInvest'][0] {
      _type,
      'seo': ${SeoSettingsGroq},
      'hero': ${HeroTextModuleGroq},
      'statistics': statistics.facts[]{
        _type, 
        leftHeading, 
        rightHeading, 
        paragraphWithButton
      },
      'thesis': thesis${TextModuleWithParagraphsGroq},
      'investmentHeading': investmentHeading${TextModuleWithParagraphsGroq},
      'investmentParagraphs': investmentParagraphs[]{
        _type,
        heading,
        paragraph
      },
      'apply': apply${TextModuleGroq},
    }`);

    return response;
  },
  async fetchCompaniesPage() {
    const response = await Sanity.fetch(`*[_type == 'companies' && _id == '_companies'][0] {
      _type,
      'seo': ${SeoSettingsGroq},
      'hero': ${HeroTextModuleGroq},
      'investmentsList': investmentsList${InvestmentsListModuleGroq},
      'contact': contactSection${TextModuleGroq},
    }`);

    return response;
  },
  async fetchDefaultPage(slug: string) {
    const response = await Sanity.fetch(
      `*[_type == 'default' && slug == '/${slug}'][0]{
        _type,
        'seo': ${SeoSettingsGroq},
        'intro': intro${TextModuleGroq},
        'content': { ${DefaultPageContentGroq('body')} },
      }`
    );

    return response;
  },
  async fetchCompanyDetailPage(slug: string) {
    const response = await Sanity.fetch(
      `*[_type == 'companyDetail' && slug == '/${slug}'][0]{
        _type,
        'seo': ${SeoSettingsGroq},
        'companyDetailLanding': companyDetailLanding${CompanyDetailLandingGroq},
        'content': { ${CompanyDetailPageContentGroq('body')} },
        'founders': founders[]->${FounderGroq},
        'pressList': pressList${PressListModuleGroq},
      }`
    );

    return response;
  },
};

export default ApiClient;
