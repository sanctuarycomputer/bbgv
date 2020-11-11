import * as Cms from 'lib/cms/types';
import Sanity from 'lib/cms/config';
import SeoSettingsGroq from './groq/SeoSettings';

const ApiClient: {
  fetchGlobalSettings(): Promise<Cms.GlobalSettings | unknown>;
  fetchHome(): Promise<Cms.HomePage | unknown>;
} = {
  async fetchGlobalSettings() {
    const response = await Sanity.fetch(`*[_type == 'globalSettings'][0]`);

    return response;
  },
  async fetchHome() {
    const response = await Sanity.fetch(`*[_type == 'home' && _id == '_home'][0] {
      'seo': ${SeoSettingsGroq},
      _type
    }`);

    return response;
  },
};

export default ApiClient;
