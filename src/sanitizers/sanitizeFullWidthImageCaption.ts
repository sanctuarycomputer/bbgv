import memoize from 'lodash/memoize';

import get from 'lodash/get';

import { FullWidthImageCaption } from 'lib/cms/types';

export default memoize(
  (data: unknown): FullWidthImageCaption => {
    const id = get(data, '_key', '');

    return {
      id,
      type: get(data, '_type', 'fullWidthImageCaption'),
      src: get(data, 'src', ''),
      caption: get(data, 'caption', ''),
      alt: get(data, 'alt', ''),
    };
  }
);
