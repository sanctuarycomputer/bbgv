import memoize from 'lodash/memoize';

import get from 'lodash/get';

import { VideoModule } from 'lib/cms/types';
import sanitizeImage from 'sanitizers/sanitizeImage';

export default memoize(
  (data: unknown): VideoModule => {
    return {
      _type: get(data, '_type', 'videoField'),
      vimeoId: get(data, 'vimeoId'),
      caption: get(data, 'caption', ''),
      founders: get(data, 'founders', ''),
      jobTitle: get(data, 'jobTitle', ''),
      companyName: get(data, 'companyName', ''),
      coverImage: sanitizeImage(get(data, 'coverImage', {})),
    };
  }
);
