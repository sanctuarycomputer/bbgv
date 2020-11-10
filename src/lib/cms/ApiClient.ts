import * as Cms from 'lib/cms';

const ApiClient: {
  fetchGlobalSettings(): Promise<Cms.GlobalSettings>;
} = {
  async fetchGlobalSettings() {
    return Cms.Pages.fetchGlobalSettings();
  },
};

export default ApiClient;
