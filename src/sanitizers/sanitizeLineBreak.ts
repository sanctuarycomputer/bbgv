import memoize from 'lodash/memoize';

import get from 'lodash/get';

import { LineBreak } from 'lib/cms/types';

export default memoize(
  (data: unknown): LineBreak => {
    const id = get(data, '_key', '');

    return {
      id,
      type: get(data, '_type', 'lineBreak'),
      variant: get(data, 'variant', 'lilac'),
    };
  }
);
