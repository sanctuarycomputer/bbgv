import * as Cms from 'lib/cms/types';
import Sanity from 'lib/cms/config';
import SeoSettingsGroq from './groq/SeoSettings';

const ApiClient: {
  fetchGlobalSettings(): Promise<Cms.GlobalSettings | void>;
  fetchHome(): Promise<Cms.HomePage | void>;
} = {
  async fetchGlobalSettings() {
    await Sanity.fetch(`*[_type == 'globalSettings'][0]`);
  },
  async fetchHome() {
    await Sanity.fetch(`*[_type == 'home' && _id == '_home'][0] {
      'seo': ${SeoSettingsGroq},
      _type
    }`);
  },
};

export default ApiClient;
