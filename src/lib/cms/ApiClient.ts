import * as Cms from 'lib/cms/types';
import Sanity from 'lib/cms/SanityClient';
import SeoSettingsGroq from './groq/SeoSettings';
import HomeHeroGroq from './groq/HomeHero';
import HeroTextModuleGroq from './groq/HeroTextModule';
import GlobalSettingsGroq from './groq/GlobalSettings';
import NewsletterGroq from './groq/Newsletter';
import FoundersImpactSlideshowGroq from './groq/FoundersImpactSlideshow';

const ApiClient: {
  fetchGlobalSettings(): Promise<Cms.GlobalSettings | any>;
  fetchHome(): Promise<Cms.HomePage | any>;
  fetchAboutPage(): Promise<Cms.AboutPage | any>;
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
      'newsletter': ${NewsletterGroq},
      _type
    }`);

    return response;
  },
  async fetchAboutPage() {
    const response = await Sanity.fetch(`*[_type == 'about' && _id == '_about'][0] {
      _type,
      'seo': ${SeoSettingsGroq},
      'hero': ${HeroTextModuleGroq},
    }`);

    return response;
  },
};

export default ApiClient;
