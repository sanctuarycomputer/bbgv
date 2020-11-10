import Sanity from './config';
import Queries from './queries';

export const Pages = {
  fetchGlobalSettings() {
    return Sanity.fetch(Queries.globalSettings);
  },
};

export { GlobalSettings } from './types';
