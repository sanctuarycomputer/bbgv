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

const ApiClient: {
  fetchGlobalSettings(): Promise<Cms.GlobalSettings | any>;
  fetchHome(): Promise<Cms.HomePage | any>;
  fetchAboutPage(): Promise<Cms.AboutPage | any>;
  fetchWhyWeInvestPage(): Promise<Cms.WhyWeInvestPage | any>;
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
      'valuesSection': valuesSection${TextModuleWithParagraphsGroq},
      'pressHeading': pressHeading${TextModuleGroq},
      'contact': contactSection${TextModuleGroq},
    }`);

    return response;
  },
  async fetchWhyWeInvestPage() {
    const response = await Sanity.fetch(`*[_type == 'whyWeInvest' && _id == '_whyWeInvest'][0] {
      _type,
      'seo': ${SeoSettingsGroq},
      'hero': ${HeroTextModuleGroq},
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
};

export default ApiClient;
