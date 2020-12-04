import memoize from 'lodash/memoize';
import get from 'lodash/get';

import { Image } from 'lib/cms/types';

export default memoize(
  (image: unknown): Image => {
    const id = get(image, 'id', '');

    return {
      id,
      src: get(image, 'src', ''),
      alt: get(image, 'alt', ''),
      caption: get(image, 'caption', ''),
    };
  }
);
