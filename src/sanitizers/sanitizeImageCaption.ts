import memoize from 'lodash/memoize';

import get from 'lodash/get';

import { ImageCaption } from 'lib/cms/types';

export default memoize(
  (data: unknown): ImageCaption => {
    const id = get(data, '_key', '');

    return {
      id,
      type: get(data, '_type', 'imageCaption'),
      src: get(data, 'src', ''),
      caption: get(data, 'caption', ''),
      alt: get(data, 'alt', ''),
    };
  }
);
