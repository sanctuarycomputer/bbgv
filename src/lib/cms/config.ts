import SanityClient from '@sanity/client';
import Config from 'lib/config';

const Sanity = SanityClient({
  projectId: Config.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
});

export default Sanity;
